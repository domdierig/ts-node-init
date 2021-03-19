import { Answers } from '../interfaces/answers.interface';

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
    repository: { [key: string]: string } | null;
    bugs: { [key: string]: string } | null;
    homepage: string | null;

    constructor(answers: Answers, gitUrl: string | null) {
        console.log(answers);

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
        } else {
            this.devDependencies = dependencies;
            this.main = 'bin/' + answers.entryPoint + '.js';
            this.scripts['start'] = 'node ' + this.main;
        }
    }
}
