"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryPointInputValidation = void 0;
const fileExtensionErrorMsg = "don't add any file extension";
const fileExtensionRegEx = /\.js|\.ts$/;
const entryPointInputValidation = (input) => {
    if (fileExtensionRegEx.test(input)) {
        return fileExtensionErrorMsg;
    }
    return true;
};
exports.entryPointInputValidation = entryPointInputValidation;
//# sourceMappingURL=entryPointInputValidation.js.map