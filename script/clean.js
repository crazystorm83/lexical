'use strict';

import fs from 'fs-extra';
import path from 'node:path';
import { packageManager } from './packages/PackageManager.js';

fs.removeSync(path.resolve(`./npm`));
fs.removeSync(path.resolve(`./.ts-temp`));
packageManager
    .getPublicPackages()
    .forEach((pkg) =>
        ['dist', 'types', 'npm'].forEach((subdir) => fs.removeSync(pkg.resolve(subdir)))
    );
