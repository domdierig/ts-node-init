"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
exports.writeFile = async (fileName, data) => {
    return fs_1.default.writeFile(fileName, data, (error) => {
        if (error) {
            throw error;
        }
    });
};
//# sourceMappingURL=writeFile.js.map