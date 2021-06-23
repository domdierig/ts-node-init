export const tsconfigjson = {
    compilerOptions: {
        module: 'CommonJS',
        esModuleInterop: true,
        target: 'ES2020',
        moduleResolution: 'node',
        sourceMap: true,
        outDir: 'bin',
        declaration: true,
    },
    lib: ['ES2020'],
    exclude: ['bin', 'node_modules'],
};
