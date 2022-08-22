const versionNumberErrorMsg = 'invalid version number';
const versionNumberRegex = /[0-9]+\.[0-9]+\.[0-9]+/;
export const versionInputValidation = (input) => {
    if (versionNumberRegex.test(input)) {
        return true;
    }
    return versionNumberErrorMsg;
};
//# sourceMappingURL=versionInputValidation.js.map