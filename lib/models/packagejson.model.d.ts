import { Answers } from '../interfaces/answers.interface';
export declare class PackageJsonModel {
    name: string;
    version: string;
    description: string;
    main: string;
    scripts: {
        [key: string]: string;
    };
    author: string;
    license: string;
    devDependencies: {
        [key: string]: string;
    };
    dependencies: {
        [key: string]: string;
    };
    repository: {
        [key: string]: string;
    } | null;
    bugs: {
        [key: string]: string;
    } | null;
    homepage: string | null;
    constructor(answers: Answers, gitUrl: string | null);
}
