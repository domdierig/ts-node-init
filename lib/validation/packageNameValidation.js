"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageNameValidation = void 0;
const packageNameErrorMsg = 'invalid package name';
exports.packageNameValidation = (input) => {
    if (input.length <= 0) {
        return packageNameErrorMsg;
    }
    if (input.includes(' ')) {
        return packageNameErrorMsg;
    }
    return true;
};
//# sourceMappingURL=packageNameValidation.js.map