import fs from 'fs';

export const writeFile = async (fileName: string, data: string): Promise<void> => {
    return fs.writeFile(fileName, data, (error) => {
        if (error) {
            throw error;
        }
    });
};
