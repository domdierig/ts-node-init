"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageJsonModel = void 0;
class PackageJsonModel {
    constructor(answers) {
        this.name = answers.packageName;
        this.version = answers.version;
        this.description = answers.description;
        this.main = 'lib/' + answers.entryPoint;
        this.author = answers.author;
        this.license = answers.license;
        this.scripts = {
            dev: 'tsc --watch',
            start: 'node ' + this.main,
        };
        this.devDependencies = {
            '@types/node': '^14.14.5',
            typescript: '^4.0.5',
        };
    }
}
exports.PackageJsonModel = PackageJsonModel;
//# sourceMappingURL=packagejson.model.js.map