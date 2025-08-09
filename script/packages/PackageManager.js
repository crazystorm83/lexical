import { glob } from 'glob';
import { PackageMatadata } from './PackageMatadata.js';

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production' || env === 'stage';
const isDevelopment = !isProduction;

class PackageManager {
    /** @type {PackageMatadata[]} */
    packages;

    /** @param {string[]} packagePaths */
    constructor(packagePaths) {
        console.log(packagePaths);
        this.packages = packagePaths.map((path) => new PackageMatadata(path, isProduction));
    }

    getPublicPackages() {
        return this.packages.filter((pkg) => !pkg.isPrivate());
    }
}

const packageManager = new PackageManager(glob.sync('packages/*/package.json'));

export { packageManager };
