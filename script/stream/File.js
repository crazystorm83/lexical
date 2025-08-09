export class File {
    /**
     *
     * @param {string} name
     * @returns {string}
     */
    static getFileName(name) {
        const parts = name.replace(/@/g, '').split(/\//g);
        return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    }
}
