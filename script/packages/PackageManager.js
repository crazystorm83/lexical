const path = require("node:path");
const fs = require("fs-extra");

class PackageManager {
    /** @type {PackageMetadata[]} */
    packages;

    /** @param {string[]} packagePaths */
    constructor(packagePaths) {
        this.packages = packagePaths.map((path) => new PackageMetadata(path));
    }
}

exports.packageManager = new PackageManager(
    glob.sync(
        path.resolve(
            path.dirname(
                path.dirname(__dirname)),
                'packages/*/package.json'
        )
    )
);