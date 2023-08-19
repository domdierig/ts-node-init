import { Answers } from '../interfaces/answers.interface.js';
import { execSync } from 'child_process';

export class PackageJsonModel {
    name: string;
    version: string;
    description: string;
    main: string;
    scripts: { [key: string]: string };
    author: string;
    license: string;
    devDependencies: { [key: string]: string };
    dependencies: { [key: string]: string };
    type: string;
    repository?: { [key: string]: string };
    bugs?: { [key: string]: string };
    homepage?: string;

    constructor(answers: Answers, gitUrl: string | null) {
        this.name = answers.packageName;
        this.version = answers.version;
        this.description = answers.description;
        this.author = answers.author;
        this.license = answers.license;
        this.type = 'module';
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

        this.devDependencies = {
            '@types/node': '^' + execSync('npm show @types/node version').toString().replace('\n', ''),
            typescript: '^' + execSync('npm show typescript version').toString().replace('\n', ''),
        };

        this.main = 'bin/' + answers.entryPoint + '.js';
        this.scripts['start'] = 'node ' + this.main;

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
