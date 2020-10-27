"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
const path_1 = __importDefault(require("path"));
const questionType_enum_1 = require("../enums/questionType.enum");
const isNumeric_1 = require("../helper/isNumeric");
const questions = [
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'packageName',
        message: 'package name:',
        default: path_1.default.basename(process.cwd()),
        validate: (input) => {
            return input.length > 0;
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
                return 'invalid version number';
            }
            if (!isNumeric_1.isNumeric(splittedInput[0])) {
                return 'invalid version number';
            }
            if (!isNumeric_1.isNumeric(splittedInput[1])) {
                return 'invalid version number';
            }
            if (!isNumeric_1.isNumeric(splittedInput[2])) {
                return 'invalid version number';
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
        default: 'app.js',
        validate: (input) => {
            const splittedInput = input.split('.');
            if (splittedInput.length !== 2) {
                return 'invalid file name';
            }
            if (splittedInput[1] !== 'js') {
                return 'invalid file name';
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