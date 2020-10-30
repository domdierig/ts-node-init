"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDirExists = void 0;
const fs_1 = __importDefault(require("fs"));
exports.ensureDirExists = async (dir) => {
    if (!fs_1.default.existsSync(dir)) {
        return fs_1.default.mkdir(dir, { recursive: true }, (error) => {
            if (error) {
                throw error;
            }
        });
    }
};
//# sourceMappingURL=ensureDirExists.js.map