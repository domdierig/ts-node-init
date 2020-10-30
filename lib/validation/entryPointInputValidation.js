"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryPointInputValidation = void 0;
const fileExtenstionErrorMsg = "don't add any file extension";
exports.entryPointInputValidation = (input) => {
    const splittedInput = input.split('.');
    if (splittedInput.length === 1) {
        return true;
    }
    if (splittedInput[splittedInput.length - 1] !== 'js' || splittedInput[splittedInput.length - 1] !== 'ts') {
        return fileExtenstionErrorMsg;
    }
    return true;
};
//# sourceMappingURL=entryPointInputValidation.js.map