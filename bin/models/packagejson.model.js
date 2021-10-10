"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageJsonModel = void 0;
const child_process_1 = require("child_process");
class PackageJsonModel {
    constructor(answers, gitUrl) {
        this.name = answers.packageName;
        this.version = answers.version;
        this.description = answers.description;
        this.author = answers.author;
        this.license = answers.license;
        this.devDependencies = {};
        this.dependencies = {};
        this.scripts = {
            dev: 'tsc --watch',
        };
        if (gitUrl) {
            this.repository = {
                type: 'git',
                url: 'git+' + gitUrl,
            };
            this.bugs = {
                url: gitUrl.substring(0, gitUrl.length - 4) + '/issues',
            };
            this.homepage = gitUrl.substring(0, gitUrl.length - 4) + '#readme';
        }
        const dependencies = {
            '@types/node': '^' + (0, child_process_1.execSync)('npm show @types/node version').toString().replace('\n', ''),
            typescript: '^' + (0, child_process_1.execSync)('npm show typescript version').toString().replace('\n', ''),
        };
        if (answers.tsnode) {
            dependencies['ts-node'] = '^' + (0, child_process_1.execSync)('npm show ts-node version').toString().replace('\n', '');
            this.dependencies = dependencies;
            this.main = 'src/' + answers.entryPoint + '.ts';
            this.scripts['start'] = 'ts-node ' + this.main;
        }
        else {
            this.devDependencies = dependencies;
            this.main = 'bin/' + answers.entryPoint + '.js';
            this.scripts['start'] = 'node ' + this.main;
        }
        if (answers.jest) {
            this.scripts['test'] = 'jest';
            this.devDependencies['jest'] = '^' + (0, child_process_1.execSync)('npm show jest version').toString().replace('\n', '');
            if (answers.tsjest) {
                this.devDependencies['@types/jest'] = '^' + (0, child_process_1.execSync)('npm show @types/jest version').toString().replace('\n', '');
                this.devDependencies['ts-jest'] = '^' + (0, child_process_1.execSync)('npm show ts-jest version').toString().replace('\n', '');
            }
        }
    }
}
exports.PackageJsonModel = PackageJsonModel;
//# sourceMappingURL=packagejson.model.js.map