import { isNumeric } from '../helper/isNumeric';

const versionNumberErrorMsg = 'invalid version number';

export const versionInputValidation = (input: string): string | boolean => {
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
};
