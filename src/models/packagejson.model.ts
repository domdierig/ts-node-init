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

    constructor(answers: Answers) {
        this.name = answers.packageName;
        this.version = answers.version;
        this.description = answers.description;
        this.main = 'lib/' + answers.entryPoint + '.js';
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
