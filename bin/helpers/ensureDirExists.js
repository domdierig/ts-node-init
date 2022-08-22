import fs from 'fs';
export const ensureDirExists = async (dir) => {
    if (!fs.existsSync(dir)) {
        return fs.mkdir(dir, { recursive: true }, (error) => {
            if (error) {
                throw error;
            }
        });
    }
};
//# sourceMappingURL=ensureDirExists.js.map