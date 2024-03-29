import path from 'path';
import { QuestionTypeEnum } from '../enums/questionType.enum.js';
import { Question } from '../interfaces/question.interface.js';
import { entryPointInputValidation } from '../validation/entryPointInputValidation.js';
import { packageNameInputValidation } from '../validation/packageNameInputValidation.js';
import { versionInputValidation } from '../validation/versionInputValidation.js';

const questions: Question[] = [
    {
        type: QuestionTypeEnum.Input,
        name: 'packageName',
        message: 'package name:',
        default: path.basename(process.cwd()),
        validate: packageNameInputValidation,
    },
    {
        type: QuestionTypeEnum.Input,
        name: 'version',
        message: 'version:',
        default: '0.0.1',
        validate: versionInputValidation,
    },
    {
        type: QuestionTypeEnum.Input,
        name: 'description',
        message: 'description:',
    },
    {
        type: QuestionTypeEnum.Input,
        name: 'entryPoint',
        message: 'entry point:',
        default: 'app',
        validate: entryPointInputValidation,
    },
    {
        type: QuestionTypeEnum.Input,
        name: 'author',
        message: 'author:',
    },
    {
        type: QuestionTypeEnum.Input,
        name: 'license',
        message: 'license:',
        default: 'ISC',
    },
    {
        type: QuestionTypeEnum.Confirm,
        name: 'jest',
        message: 'add jest test framework:',
        default: false,
    },
    {
        type: QuestionTypeEnum.Confirm,
        name: 'tsjest',
        message: 'execute tests with ts-jest package:',
        default: false,
    },
];

export { questions };
