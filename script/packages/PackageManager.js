import { glob } from "glob";
import { PackageMatadata } from "./PackageMatadata.js";

class PackageManager {
    /** @type {PackageMatadata[]} */
    packages;

    /** @param {string[]} packagePaths */
    constructor(packagePaths) {
        console.log(packagePaths);
        this.packages = packagePaths.map((path) => new PackageMatadata(path));
    }

    getPublicPackages() {
        return this.packages.filter(pkg => !pkg.isPrivate());
    }
}

const packageManager = new PackageManager(
    glob.sync('packages/*/package.json')
);

export { packageManager };

