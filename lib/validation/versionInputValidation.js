"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionInputValidation = void 0;
const versionNumberErrorMsg = 'invalid version number';
const versionNumberRegex = /[0-9]+\.[0-9]+\.[0-9]+/;
exports.versionInputValidation = (input) => {
    if (versionNumberRegex.test(input)) {
        return true;
    }
    return versionNumberErrorMsg;
};
//# sourceMappingURL=versionInputValidation.js.map