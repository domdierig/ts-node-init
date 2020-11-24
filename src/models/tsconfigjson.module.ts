import { Answers } from '../interfaces/answers.interface';

export class TsConfigJsonModel {
    compilerOptions: {
        module: string;
        esModuleInterop: boolean;
        target: string;
        moduleResolution: string;
        sourceMap: boolean;
        outDir: string;
    };
    lib: string[];

    constructor(answers: Answers) {
        this.compilerOptions = {
            module: answers.compileTargetModuleFormat === 'ES modules' ? 'es6' : 'commonjs',
            esModuleInterop: true,
            target: 'ES2020',
            moduleResolution: 'node',
            sourceMap: true,
            outDir: 'lib',
        };
        this.lib = ['ES2020'];
    }
}

// export const tsconfigjson = {
//     compilerOptions: {
//         module: 'CommonJS',
//         esModuleInterop: true,
//         target: 'ES2019',
//         moduleResolution: 'node',
//         sourceMap: true,
//         outDir: 'lib',
//     },
//     lib: ['ES2020'],
// };
