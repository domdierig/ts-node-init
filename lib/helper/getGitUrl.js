"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitUrl = void 0;
const ini_1 = __importDefault(require("ini"));
const fs_1 = __importDefault(require("fs"));
const getGitUrl = async () => {
    if (fs_1.default.existsSync('.git')) {
        const config = ini_1.default.parse(fs_1.default.readFileSync('./.git/config', 'utf-8'));
        return config['remote "origin"'].url;
    }
    return null;
};
exports.getGitUrl = getGitUrl;
//# sourceMappingURL=getGitUrl.js.map