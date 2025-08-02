import fs from "fs-extra";
import path from "node:path";

import { Directory } from "../stream/Directory.js";
import { File } from "../stream/File.js";

export class PackageMatadata {
    /** @type {string} */
    packageJsonPath;
    /** @type {Record<string, any>} */
    packageJson;
    /** @type {boolean} */
    isProduction;

    /** @param {string} packageJsonPath */
    constructor(packageJsonPath, isProduction = false) {
        console.log(packageJsonPath);
        this.packageJsonPath = packageJsonPath;
        this.packageJson = fs.readJsonSync(packageJsonPath);
    }

    /**
     * @param {...string} paths to resolve in this package's directory
     * @returns {string} Resolve a path in this package's directory
     */
    resolve(...paths) {
      return path.resolve(path.dirname(this.packageJsonPath), ...paths);
    }

    getDirectoryName() {
        return path.dirname(this.packageJsonPath);
    }

    getNpmName() {
        return this.packageJson.name;
    }

    getPackageName() {
        const parts = this.packageJson.name.toLowerCase().replace(/@/g, '').split(/[\/\-]/g);
        return parts.join('_');
    }

    isPrivate() {
        return this.packageJson.private || false;
    }

    getBuildDefinition() {
        const name = this.getNpmName();
        const fileName = File.getFileName(name);
        const directoryName = this.getDirectoryName();
        const packageName = this.getPackageName();
        return {
            name: fileName,
            outputPathForDeclaration: Directory.resolve(directoryName, 'types'),
            outputPath: Directory.resolve(directoryName, 'dist'),
            outputFile: `${fileName}.js`,
            packageName: packageName,
            sourcePath: Directory.resolve(directoryName, 'src'),
            sourceFile: 'index.ts',
            sourcemap: !this.isProduction
        }
    }
}