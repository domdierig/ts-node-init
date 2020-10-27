import path from 'path';
import { QuestionTypeEnum } from '../enums/questionType.enum';
import { isNumeric } from '../helper/isNumeric';
import { Question } from '../interfaces/question.interface';

const questions: Question[] = [
    {
        type: QuestionTypeEnum.Input,
        name: 'packageName',
        message: 'package name:',
        default: path.basename(process.cwd()),
        validate: (input) => {
            return input.length > 0;
        },
    },
    {
        type: QuestionTypeEnum.Input,
        name: 'version',
        message: 'version:',
        default: '1.0.0',
        validate: (input) => {
            const splittedInput = input.split('.');
            if (splittedInput.length !== 3) {
                return 'invalid version number';
            }
            if (!isNumeric(splittedInput[0])) {
                return 'invalid version number';
            }
            if (!isNumeric(splittedInput[1])) {
                return 'invalid version number';
            }
            if (!isNumeric(splittedInput[2])) {
                return 'invalid version number';
            }
            return true;
        },
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
