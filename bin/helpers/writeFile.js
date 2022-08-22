import fs from 'fs';
export const writeFile = async (fileName, data) => {
    return fs.writeFile(fileName, data, (error) => {
        if (error) {
            throw error;
        }
    });
};
//# sourceMappingURL=writeFile.js.map