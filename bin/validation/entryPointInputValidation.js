const fileExtensionErrorMsg = "don't add any file extension";
const fileExtensionRegEx = /\.js|\.ts$/;
export const entryPointInputValidation = (input) => {
    if (fileExtensionRegEx.test(input)) {
        return fileExtensionErrorMsg;
    }
    return true;
};
//# sourceMappingURL=entryPointInputValidation.js.map