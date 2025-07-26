import { packageManager } from "./packages/PackageManager.js";

async function buildAll() {
    const publicPackages = packageManager.getPublicPackages();

    for (const pkg of publicPackages) {
        console.log(pkg.getNpmName());
    }

    console.log('build success');
}

buildAll();
