import { execSync } from 'child_process';
export class PackageJsonModel {
    name;
    version;
    description;
    main;
    scripts;
    author;
    license;
    devDependencies;
    dependencies;
    repository;
    bugs;
    homepage;
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
            '@types/node': '^' + execSync('npm show @types/node version').toString().replace('\n', ''),
            typescript: '^' + execSync('npm show typescript version').toString().replace('\n', ''),
        };
        if (answers.tsnode) {
            dependencies['ts-node'] = '^' + execSync('npm show ts-node version').toString().replace('\n', '');
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
            this.devDependencies['jest'] = '^' + execSync('npm show jest version').toString().replace('\n', '');
            if (answers.tsjest) {
                this.devDependencies['@types/jest'] = '^' + execSync('npm show @types/jest version').toString().replace('\n', '');
                this.devDependencies['ts-jest'] = '^' + execSync('npm show ts-jest version').toString().replace('\n', '');
            }
        }
    }
}
//# sourceMappingURL=packagejson.model.js.map