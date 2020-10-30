import path from 'path';
import { QuestionTypeEnum } from '../enums/questionType.enum';
import { Question } from '../interfaces/question.interface';
import { entryPointInputValidation } from '../validation/entryPointInputValidation';
import { packageNameInputValidation } from '../validation/packageNameInputValidation';
import { versionInputValidation } from '../validation/versionInputValidation';

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
        default: '1.0.0',
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
];

export { questions };
