"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const fs_1 = __importDefault(require("fs"));
const questions_const_1 = require("./constants/questions.const");
const packagejson_model_1 = require("./models/packagejson.model");
const tsconfigjson_const_1 = require("./constants/tsconfigjson.const");
const tsni = async () => {
    inquirer_1.default
        .prompt(questions_const_1.questions)
        .then(async (answers) => {
        const packagejson = new packagejson_model_1.PackageJsonModel(answers);
        if (!fs_1.default.existsSync('src')) {
            await fs_1.default.mkdir('src', { recursive: true }, (error) => {
                if (error) {
                    throw error;
                }
            });
        }
        await fs_1.default.writeFile('package.json', JSON.stringify(packagejson, null, 4), (error) => {
            if (error) {
                throw error;
            }
        });
        await fs_1.default.writeFile('tsconfig.json', JSON.stringify(tsconfigjson_const_1.tsconfigjson, null, 4), (error) => {
            if (error) {
                throw error;
            }
        });
        const fileName = 'src/' + answers.entryPoint + '.ts';
        await fs_1.default.writeFile(fileName, "console.log('hello world');", (error) => {
            if (error) {
                throw error;
            }
        });
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