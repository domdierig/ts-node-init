import validate from 'validate-npm-package-name';
const packageNameErrorMsg = 'invalid package name';
export const packageNameInputValidation = (input) => {
    const validationResult = validate(input);
    return validationResult.validForNewPackages;
};
//# sourceMappingURL=packageNameInputValidation.js.map