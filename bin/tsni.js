import inquirer from 'inquirer';
import { questions } from './constants/questions.const.js';
import { PackageJsonModel } from './models/packagejson.model.js';
import { tsconfigjson } from './constants/tsconfigjson.const.js';
import { writeFile } from './helpers/writeFile.js';
import { ensureDirExists } from './helpers/ensureDirExists.js';
import { getGitUrl } from './helpers/getGitUrl.js';
import { jestconfigjs } from './constants/jestconfigjs.const.js';
import { defaulttest } from './constants/defaulttest.const.js';
import { entryfile } from './constants/entryfile.const.js';
export const tsni = async () => {
    inquirer
        .prompt(questions)
        .then(async (answers) => {
        const gitUrl = await getGitUrl();
        const packagejson = new PackageJsonModel(answers, gitUrl);
        await ensureDirExists('src');
        if (answers.jest) {
            ensureDirExists('__tests__');
            tsconfigjson.exclude.push('__tests__');
            let testFileName = 'default.test.js';
            if (answers.tsjest) {
                await writeFile('jest.config.js', jestconfigjs);
                testFileName = 'default.test.ts';
            }
            await writeFile(`__tests__/${testFileName}`, defaulttest);
        }
        const fileName = `src/${answers.entryPoint}.ts`;
        await writeFile('package.json', JSON.stringify(packagejson, null, 4));
        await writeFile('tsconfig.json', JSON.stringify(tsconfigjson, null, 4));
        await writeFile(fileName, entryfile);
    })
        .catch((error) => {
        if (error.isTtyError) {
            console.error('something went wrong with the inquirer dependency');
        }
        else {
            console.error(error);
        }
    });
};
//# sourceMappingURL=tsni.js.map