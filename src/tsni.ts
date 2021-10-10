import inquirer from 'inquirer';
import { questions } from './constants/questions.const';
import { Answers } from './interfaces/answers.interface';
import { PackageJsonModel } from './models/packagejson.model';
import { tsconfigjson } from './constants/tsconfigjson.const';
import { writeFile } from './helpers/writeFile';
import { ensureDirExists } from './helpers/ensureDirExists';
import { getGitUrl } from './helpers/getGitUrl';
import { jestconfigjs } from './constants/jestconfigjs.const';
import { defaulttest } from './constants/defaulttest.const';

const tsni = async () => {
	inquirer
		.prompt(questions)
		.then(async (answers: Answers) => {
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
