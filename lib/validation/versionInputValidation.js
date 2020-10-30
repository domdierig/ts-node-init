"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionInputValidation = void 0;
const isNumeric_1 = require("../helper/isNumeric");
const versionNumberErrorMsg = 'invalid version number';
exports.versionInputValidation = (input) => {
    const splittedInput = input.split('.');
    if (splittedInput.length !== 3) {
        return versionNumberErrorMsg;
    }
    if (!isNumeric_1.isNumeric(splittedInput[0])) {
        return versionNumberErrorMsg;
    }
    if (!isNumeric_1.isNumeric(splittedInput[1])) {
        return versionNumberErrorMsg;
    }
    if (!isNumeric_1.isNumeric(splittedInput[2])) {
        return versionNumberErrorMsg;
    }
    return true;
};
//# sourceMappingURL=versionInputValidation.js.map