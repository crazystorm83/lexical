class PackageMatadata {
    /** @type {string} */
    packageJsonPath;
    /** @type {Record<string, any>} */
    packageJson;

    /** @param {string} packageJsonPath */
    constructor(packageJsonPath) {
        this.packageJsonPath = packageJsonPath;
        this.packageJson = fs.readJsonSync(packageJsonPath);
    }

    getDirectoryName() {
        return path.basename(this.packageJsonPath);
    }

    getNpmName() {
        return this.packageJson.name;
    }

    isPrivate() {
        return this.packageJson.private || false;
    }
}