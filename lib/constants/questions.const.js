"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
const path_1 = __importDefault(require("path"));
const questionType_enum_1 = require("../enums/questionType.enum");
const isNumeric_1 = require("../helper/isNumeric");
const packageNameErrorMsg = 'invalid package name';
const versionNumberErrorMsg = 'invalid version number';
const fileExtenstionErrorMsg = "don't add any file extension";
const questions = [
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'packageName',
        message: 'package name:',
        default: path_1.default.basename(process.cwd()),
        validate: (input) => {
            if (input.length <= 0) {
                return packageNameErrorMsg;
            }
            if (input.includes(' ')) {
                return packageNameErrorMsg;
            }
            return true;
        },
    },
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'version',
        message: 'version:',
        default: '1.0.0',
        validate: (input) => {
            const splittedInput = input.split('.');
            if (splittedInput.length !== 3) {
                return versionNumberErrorMsg;
            }
            if (!isNumeric_1.isNumeric(splittedInput[0])) {
                return versionNumberErrorMsg;
            }
            if (!isNumeric_1.isNumeric(splittedInput[1])) {
                return versionNumberErrorMsg;
            }
            if (!isNumeric_1.isNumeric(splittedInput[2])) {
                return versionNumberErrorMsg;
            }
            return true;
        },
    },
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'description',
        message: 'description:',
    },
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'entryPoint',
        message: 'entry point:',
        default: 'app',
        validate: (input) => {
            const splittedInput = input.split('.');
            if (splittedInput.length === 1) {
                return true;
            }
            if (splittedInput[splittedInput.length - 1] !== 'js' || splittedInput[splittedInput.length - 1] !== 'ts') {
                return fileExtenstionErrorMsg;
            }
            return true;
        },
    },
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'author',
        message: 'author:',
    },
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'license',
        message: 'license:',
        default: 'ISC',
    },
];
exports.questions = questions;
//# sourceMappingURL=questions.const.js.map