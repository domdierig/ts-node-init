const packageNameErrorMsg = 'invalid package name';

export const packageNameInputValidation = (input: string): string | boolean => {
    if (input.length <= 0) {
        return packageNameErrorMsg;
    }
    if (input.includes(' ')) {
        return packageNameErrorMsg;
    }
    return true;
};
