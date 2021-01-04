export const tsconfigjson = {
    compilerOptions: {
        module: 'CommonJS',
        esModuleInterop: true,
        target: 'ES2020',
        moduleResolution: 'node',
        sourceMap: true,
        outDir: 'lib',
        declaration: true,
    },
    lib: ['ES2020'],
};
