import path from 'path';
import { QuestionTypeEnum } from '../enums/questionType.enum';
import { isNumeric } from '../helper/isNumeric';
import { Question } from '../interfaces/question.interface';

const packageNameErrorMsg = 'invalid package name';
const versionNumberErrorMsg = 'invalid version number';
const fileExtenstionErrorMsg = "don't add any file extension";

const questions: Question[] = [
    {
        type: QuestionTypeEnum.Input,
        name: 'packageName',
        message: 'package name:',
        default: path.basename(process.cwd()),
        validate: (input: string) => {
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
        type: QuestionTypeEnum.Input,
        name: 'version',
        message: 'version:',
        default: '1.0.0',
        validate: (input: string) => {
            const splittedInput = input.split('.');
            if (splittedInput.length !== 3) {
                return versionNumberErrorMsg;
            }
            if (!isNumeric(splittedInput[0])) {
                return versionNumberErrorMsg;
            }
            if (!isNumeric(splittedInput[1])) {
                return versionNumberErrorMsg;
            }
            if (!isNumeric(splittedInput[2])) {
                return versionNumberErrorMsg;
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
        default: 'app',
        validate: (input: string) => {
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
