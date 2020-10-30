import fs from 'fs';

export const ensureDirExists = async (dir: string) => {
    if (!fs.existsSync(dir)) {
        return fs.mkdir(dir, { recursive: true }, (error) => {
            if (error) {
                throw error;
            }
        });
    }
};
