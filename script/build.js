import minimist from 'minimist';
import path from 'path';
import { rollup } from 'rollup';

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
                //third part externals
                external: (moduleName, src) => thirdPartyExternalsRegExp.test(moduleName),
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
 * @param {PackageMatadata} pkg 
 * @returns {Promise<void>}
 */
async function buildPackage(pkg) { 
    const formats = ['cjs', 'esm', 'umd', 'iife'];
    const extensions = ['js', 'jsx', 'ts', 'tsx'];

    const npmName = pkg.getNpmName();
    const packageName = pkg.getPackageName();
    const fileName = File.getFileName(npmName);
    console.log(fileName);

    const buildDefinition = pkg.getBuildDefinition();
    console.log(buildDefinition);

    const inputFile = path.resolve(buildDefinition.sourcePath, buildDefinition.sourceFile);
    const outputPath = buildDefinition.outputPath;

    for (const format of formats) {    
        const outputFile = `${packageName}.${format}.js`;

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
        const inputOptions = {
            input: inputFile,
            plugins
        }
        const outputOptions = rollupOuterOptions(format, outputPath, outputFile, packageName);
    
        await rollup(inputOptions).then(async (bundle) => {
            await bundle.write(outputOptions);
        });
    }
}

async function buildAll() {
    const publicPackages = packageManager.getPublicPackages();
    const formats = ['cjs', 'esm', 'umd', 'iife'];

    for (const pkg of publicPackages) {
        await buildPackage(pkg);
    }

    console.log('build success');
}

buildAll();
