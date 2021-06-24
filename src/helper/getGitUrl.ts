import ini from 'ini';
import fs from 'fs';

export const getGitUrl = async (): Promise<string | null> => {
    if (fs.existsSync('.git')) {
        const config = ini.parse(fs.readFileSync('./.git/config', 'utf-8'));

        return config['remote "origin"'].url;
    }
    return null;
};
