import inquirer from 'inquirer';
import { questions } from './constants/questions.const';
import { Answers } from './interfaces/answers.interface';
import { PackageJsonModel } from './models/packagejson.model';
import { tsconfigjson } from './constants/tsconfigjson.const';
import { writeFile } from './helper/writeFile';
import { ensureDirExists } from './helper/ensureDirExists';
import { getGitUrl } from './helper/getGitUrl';

const tsni = async () => {
    inquirer
        .prompt(questions)
        .then(async (answers: Answers) => {
            const gitUrl = await getGitUrl();
            const packagejson = new PackageJsonModel(answers, gitUrl);

            await ensureDirExists('src');

            const fileName = 'src/' + answers.entryPoint + '.ts';

            await writeFile('package.json', JSON.stringify(packagejson, null, 4));
            await writeFile('tsconfig.json', JSON.stringify(tsconfigjson, null, 4));
            await writeFile(fileName, "console.log('hello world');");
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error('something went wrong with the inquirer dependency');
            } else {
                console.error(error);
            }
        });
};

module.exports = tsni;
