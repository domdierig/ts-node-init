"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryPointInputValidation = void 0;
const fileExtensionErrorMsg = "don't add any file extension";
const fileExtensionRegEx = /\.js|\.ts$/;
exports.entryPointInputValidation = (input) => {
    if (fileExtensionRegEx.test(input)) {
        return fileExtensionErrorMsg;
    }
    return true;
};
//# sourceMappingURL=entryPointInputValidation.js.map