"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const questions_const_1 = require("./constants/questions.const");
const packagejson_model_1 = require("./models/packagejson.model");
const tsconfigjson_const_1 = require("./constants/tsconfigjson.const");
const writeFile_1 = require("./helpers/writeFile");
const ensureDirExists_1 = require("./helpers/ensureDirExists");
const getGitUrl_1 = require("./helpers/getGitUrl");
const jestconfigjs_const_1 = require("./constants/jestconfigjs.const");
const defaulttest_const_1 = require("./constants/defaulttest.const");
const tsni = async () => {
    inquirer_1.default
        .prompt(questions_const_1.questions)
        .then(async (answers) => {
        const gitUrl = await (0, getGitUrl_1.getGitUrl)();
        const packagejson = new packagejson_model_1.PackageJsonModel(answers, gitUrl);
        await (0, ensureDirExists_1.ensureDirExists)('src');
        if (answers.jest) {
            (0, ensureDirExists_1.ensureDirExists)('__tests__');
            tsconfigjson_const_1.tsconfigjson.exclude.push('__tests__');
            let testFileName = 'default.test.js';
            if (answers.tsjest) {
                await (0, writeFile_1.writeFile)('jest.config.js', jestconfigjs_const_1.jestconfigjs);
                testFileName = 'default.test.ts';
            }
            await (0, writeFile_1.writeFile)(`__tests__/${testFileName}`, defaulttest_const_1.defaulttest);
        }
        const fileName = `src/${answers.entryPoint}.ts`;
        await (0, writeFile_1.writeFile)('package.json', JSON.stringify(packagejson, null, 4));
        await (0, writeFile_1.writeFile)('tsconfig.json', JSON.stringify(tsconfigjson_const_1.tsconfigjson, null, 4));
        await (0, writeFile_1.writeFile)(fileName, "console.log('hello world');");
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
module.exports = tsni;
//# sourceMappingURL=tsni.js.map