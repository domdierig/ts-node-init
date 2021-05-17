"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = void 0;
const path_1 = __importDefault(require("path"));
const questionType_enum_1 = require("../enums/questionType.enum");
const entryPointInputValidation_1 = require("../validation/entryPointInputValidation");
const packageNameInputValidation_1 = require("../validation/packageNameInputValidation");
const versionInputValidation_1 = require("../validation/versionInputValidation");
const questions = [
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'packageName',
        message: 'package name:',
        default: path_1.default.basename(process.cwd()),
        validate: packageNameInputValidation_1.packageNameInputValidation,
    },
    {
        type: questionType_enum_1.QuestionTypeEnum.Input,
        name: 'version',
        message: 'version:',
        default: '0.0.1',
        validate: versionInputValidation_1.versionInputValidation,
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
        validate: entryPointInputValidation_1.entryPointInputValidation,
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
    {
        type: questionType_enum_1.QuestionTypeEnum.Confirm,
        name: 'tsnode',
        message: 'execute code with ts-node package:',
        default: false,
    },
];
exports.questions = questions;
//# sourceMappingURL=questions.const.js.map