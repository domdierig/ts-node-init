"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsConfigJsonModel = void 0;
class TsConfigJsonModel {
    constructor(answers) {
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
exports.TsConfigJsonModel = TsConfigJsonModel;
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
//# sourceMappingURL=tsconfigjson.module.js.map