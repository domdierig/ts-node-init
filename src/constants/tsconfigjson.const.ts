export const tsconfigjson = {
	compilerOptions: {
		module: 'CommonJS',
		esModuleInterop: true,
		target: 'ES2021',
		moduleResolution: 'node',
		sourceMap: true,
		outDir: 'bin',
		declaration: true,
		strict: true,
		rootDir: 'src',
		forceConsistentCasingInFileNames: true,
	},
	lib: ['ES2021'],
	exclude: ['bin', 'node_modules'],
};
