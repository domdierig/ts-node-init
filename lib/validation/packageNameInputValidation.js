"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageNameInputValidation = void 0;
const packageNameErrorMsg = 'invalid package name';
exports.packageNameInputValidation = (input) => {
    if (input.length <= 0) {
        return packageNameErrorMsg;
    }
    if (input.includes(' ')) {
        return packageNameErrorMsg;
    }
    return true;
};
//# sourceMappingURL=packageNameInputValidation.js.map