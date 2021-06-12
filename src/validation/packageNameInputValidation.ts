import validate from 'validate-npm-package-name';

const packageNameErrorMsg = 'invalid package name';

export const packageNameInputValidation = (input: string): string | boolean => {
    const validationResult = validate(input);

    return validationResult.validForNewPackages;
};
