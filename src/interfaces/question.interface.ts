import { QuestionTypeEnum } from '../enums/questionType.enum';

export interface Question {
    type: QuestionTypeEnum;
    name: string;
    message: string;
    default?: any;
    choices?: any[];
    validate?: Function;
}
