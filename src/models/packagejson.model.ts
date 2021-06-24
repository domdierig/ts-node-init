import { Answers } from '../interfaces/answers.interface';
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
    repository?: { [key: string]: string };
    bugs?: { [key: string]: string };
    homepage?: string;

    constructor(answers: Answers, gitUrl: string | null) {
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
            'ts-node': '^' + execSync('npm show ts-node version').toString().replace('\n', ''),
        };

        if (answers.tsnode) {
            this.dependencies = dependencies;
            this.main = 'src/' + answers.entryPoint + '.ts';
            this.scripts['start'] = 'ts-node ' + this.main;
        } else {
            this.devDependencies = dependencies;
            this.main = 'bin/' + answers.entryPoint + '.js';
            this.scripts['start'] = 'node ' + this.main;
        }
    }
}
