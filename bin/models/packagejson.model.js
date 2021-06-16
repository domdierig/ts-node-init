"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageJsonModel = void 0;
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
            '@types/node': '^14.14.35',
            typescript: '^4.2.3',
            'ts-node': '^9.1.1',
        };
        if (answers.tsnode) {
            this.dependencies = dependencies;
            this.main = 'src/' + answers.entryPoint + '.ts';
            this.scripts['start'] = 'ts-node ' + this.main;
        }
        else {
            this.devDependencies = dependencies;
            this.main = 'bin/' + answers.entryPoint + '.js';
            this.scripts['start'] = 'node ' + this.main;
        }
    }
}
exports.PackageJsonModel = PackageJsonModel;
//# sourceMappingURL=packagejson.model.js.map