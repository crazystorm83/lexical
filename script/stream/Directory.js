import fs from 'fs';
import path from 'path';

export class Directory {
    /**
     * 
     * @param {string} path 
     * @returns {boolean}
     */
    static exists(path) {
        return fs.existsSync(path);
    }

    /**
     * 
     * @param {string} directory 
     * @param  {...string} paths 
     * @returns {string}
     */
    static resolve(directory, ...paths) {
        return path.resolve(directory, ...paths);
    }
}