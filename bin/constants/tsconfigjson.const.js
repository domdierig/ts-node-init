"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsconfigjson = void 0;
exports.tsconfigjson = {
    compilerOptions: {
        module: 'CommonJS',
        esModuleInterop: true,
        target: 'ES2020',
        moduleResolution: 'node',
        sourceMap: true,
        outDir: 'bin',
        declaration: true,
        strict: true,
        rootDir: 'src',
        forceConsistentCasingInFileNames: true,
    },
    lib: ['ES2020'],
    exclude: ['bin', 'node_modules'],
};
//# sourceMappingURL=tsconfigjson.const.js.map