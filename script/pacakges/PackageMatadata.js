class PackageMatadata {
    /** @type {PackageMetadata[]} */
    packages;
    /** @type {Map<string, PackageMetadata>} */
    packagesByNPMName = new Map();
    /** @type {Map<string, PackageMetadata>} */
    packagesByDirectoryName = new Map();

    /** @param {string[]} packagePaths */
    constructor(packagePaths) {
        this.packages = packagePaths.map((path) => new PackageMetadata(path));

        for (const pkg of this.packages) {
            this.packagesByNPMName.set(pkg.getNpmName(), pkg);
            this.packagesByDirectoryName.set(pkg.getDirectoryName(), pkg);
        }
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