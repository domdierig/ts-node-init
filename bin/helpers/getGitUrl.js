import ini from 'ini';
import fs from 'fs';
export const getGitUrl = async () => {
    if (fs.existsSync('.git')) {
        const config = ini.parse(fs.readFileSync('./.git/config', 'utf-8'));
        return config['remote "origin"'].url;
    }
    return null;
};
//# sourceMappingURL=getGitUrl.js.map