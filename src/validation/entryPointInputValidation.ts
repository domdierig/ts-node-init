const fileExtenstionErrorMsg = "don't add any file extension";

export const entryPointInputValidation = (input: string): string | boolean => {
    const splittedInput = input.split('.');

    if (splittedInput.length === 1) {
        return true;
    }

    if (splittedInput[splittedInput.length - 1] !== 'js' || splittedInput[splittedInput.length - 1] !== 'ts') {
        return fileExtenstionErrorMsg;
    }

    return true;
};
