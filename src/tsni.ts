import inquirer from 'inquirer';
import fs from 'fs';
import { questions } from './constants/questions.const';
import { Answers } from './interfaces/answers.interface';
import { PackageJsonModel } from './models/packagejson.model';
import { tsconfigjson } from './constants/tsconfigjson.const';

const tsni = async () => {
    inquirer
        .prompt(questions)
        .then(async (answers: Answers) => {
            const packagejson = new PackageJsonModel(answers);

            if (!fs.existsSync('src')) {
                await fs.mkdir('src', { recursive: true }, (error) => {
                    if (error) {
                        throw error;
                    }
                });
            }

            await fs.writeFile('package.json', JSON.stringify(packagejson, null, 4), (error) => {
                if (error) {
                    throw error;
                }
            });

            await fs.writeFile('tsconfig.json', JSON.stringify(tsconfigjson, null, 4), (error) => {
                if (error) {
                    throw error;
                }
            });

            const fileName = 'src/' + answers.entryPoint + '.ts';
            await fs.writeFile(fileName, "console.log('hello world');", (error) => {
                if (error) {
                    throw error;
                }
            });
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log('something went wrong with the inquirer dependency');
            } else {
                console.log(error);
            }
        });
};

module.exports = tsni;
