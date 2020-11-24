"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const questions_const_1 = require("./constants/questions.const");
const packagejson_model_1 = require("./models/packagejson.model");
const writeFile_1 = require("./helper/writeFile");
const ensureDirExists_1 = require("./helper/ensureDirExists");
const getGitUrl_1 = require("./helper/getGitUrl");
const tsconfigjson_module_1 = require("./models/tsconfigjson.module");
const tsni = async () => {
    inquirer_1.default
        .prompt(questions_const_1.questions)
        .then(async (answers) => {
        const gitUrl = await getGitUrl_1.getGitUrl();
        const packagejson = new packagejson_model_1.PackageJsonModel(answers, gitUrl);
        const tsconfigjson = new tsconfigjson_module_1.TsConfigJsonModel(answers);
        console.log(answers);
        await ensureDirExists_1.ensureDirExists('src');
        const fileName = 'src/' + answers.entryPoint + '.ts';
        await writeFile_1.writeFile('package.json', JSON.stringify(packagejson, null, 4));
        await writeFile_1.writeFile('tsconfig.json', JSON.stringify(tsconfigjson, null, 4));
        await writeFile_1.writeFile(fileName, "console.log('hello world');");
    })
        .catch((error) => {
        if (error.isTtyError) {
            console.log('something went wrong with the inquirer dependency');
        }
        else {
            console.log(error);
        }
    });
};
module.exports = tsni;
//# sourceMappingURL=tsni.js.map