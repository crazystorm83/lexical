import fs from 'fs-extra';
import minimist from 'minimist';
import path from 'path';
import { rollup } from 'rollup';

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { exec } from 'child-process-promise';
import { packageManager } from "./packages/PackageManager.js";
import { File } from "./stream/File.js";

const args = minimist(process.argv.slice(2));
const isProduction = args.production || false;

const thirdPartyExternals = ['react', 'react-dom', 'lodash', 'jquery', 'yjs', 'y-websocket'];
const thirdPartyExternalsRegExp = new RegExp(
  `^(${thirdPartyExternals.join('|')})(\\/|$)`,
);

/**
 *
 */
async function buildTSDeclarationFiles() {
    await exec('npx tsc -p ./tsconfig.build.json');
}

  /**
   *
   * @param {string} packageName
   * @param {string} outputPath
   */
function moveTSDeclarationFilesIntoDist(packageName, outputPath, originalPackagePath) {
    try {
        // Extract the original directory name from the package path
        const originalDirName = path.basename(path.dirname(originalPackagePath));
        const sourcePath = `./.ts-temp/${originalDirName}/src`;
        
        if (fs.existsSync(sourcePath)) {
            fs.copySync(sourcePath, outputPath);
            console.log(`Declaration files copied for ${packageName} from ${sourcePath}`);
        } else {
            console.log(`No declaration files found for ${packageName} at ${sourcePath}`);
        }
    } catch (error) {
        console.log(`Error copying declaration files for ${packageName}:`, error.message);
    }
}

function rollupInputOptions(inputFile, extensions) {
    const plugins = [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({ 
            babelHelpers: 'bundled',
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react'
            ],
            extensions,
            exclude: 'node_modules/**'
        }),
        typescript({
            outDir: undefined,
            declaration: false
        }),
        ...(isProduction ? [terser()] : [])
    ]

    return {
        input: inputFile,
        plugins,
        external: (moduleName, src) => thirdPartyExternalsRegExp.test(moduleName)
    }
}

/**
 * 
 * @private
 * @param {'cjs' | 'esm' | 'umd' | 'iife'} format 
 * @param {string} outputPath 
 * @param {string} outputFile 
 * @param {string} packageName 
 * @returns {Object}
 */
function rollupOuterOptions(format, outputPath, outputFile, packageName) {
    let outputOptions = {};
    switch (format) {
        case 'cjs': 
        case 'esm': {
            outputOptions = {
                file: path.resolve(outputPath, outputFile),
                format,
                sourcemap: !isProduction,
            };
            break;
        }
        case 'umd':
        case 'iife': {
            const external = [];
            outputOptions = {
                file: path.resolve(outputPath, outputFile),
                format,
                sourcemap: !isProduction,
                name: packageName
            };
            break;
        }
        default: {
            throw new Error(`Invalid format: ${format}`);
        }
    }
    return outputOptions;
}

/**
 * 
 * @param {import('./packages/PackageMatadata.js').PackageMatadata} pkg 
 * @returns {Promise<void>}
 */
async function buildPackage(pkg) { 
    const formats = ['cjs', 'esm', 'umd', 'iife'];
    const extensions = ['js', 'jsx', 'ts', 'tsx'];


    try {
        const npmName = pkg.getNpmName();
        const packageName = pkg.getPackageName();
        const fileName = File.getFileName(npmName);
        console.log(fileName);

        const buildDefinition = pkg.getBuildDefinition();
        console.log(buildDefinition);

        const inputFile = path.resolve(buildDefinition.sourcePath, buildDefinition.sourceFile);
        const outputPath = buildDefinition.outputPath;
        const outputPathForDeclaration = buildDefinition.outputPathForDeclaration;

        for (const format of formats) {    
            const outputFile = `${packageName}.${format}.js`;

            const inputOptions = rollupInputOptions(inputFile, extensions);
            const outputOptions = rollupOuterOptions(format, outputPath, outputFile, packageName);
        
            await rollup(inputOptions).then(async (bundle) => {
                await bundle.write(outputOptions);
            });
        }

        //copy declaration files
        moveTSDeclarationFilesIntoDist(packageName, outputPathForDeclaration, pkg.packageJsonPath);
    } catch (error) {
    }
}

async function buildAll() {
    const publicPackages = packageManager.getPublicPackages();
    const formats = ['cjs', 'esm', 'umd', 'iife'];

    await buildTSDeclarationFiles();

    for (const pkg of publicPackages) {
        await buildPackage(pkg);
    }

    console.log('build success');
}

buildAll();
