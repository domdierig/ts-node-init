import { Answers } from '../src/interfaces/answers.interface';
import { PackageJsonModel } from '../src/models/packagejson.model';

const versionRegEx = /\^[0-9]+\.[0-9]+\.[0-9]+/;

describe('when ts-node is selected, put ts dependencies in dependencies field', () => {
    let packageJsonModel: PackageJsonModel;

    beforeAll(() => {
        const answers: Answers = {
            packageName: 'test',
            version: '0.0.1',
            description: 'test description',
            entryPoint: 'app',
            author: 'jest',
            license: 'MIT',
            tsnode: true,
        };

        packageJsonModel = new PackageJsonModel(answers, '');
    });

    test('ts-node dependency is not null', () => {
        expect(packageJsonModel.dependencies['ts-node']).not.toBeNull();
    });

    test('ts-node dependency is not undefined', () => {
        expect(packageJsonModel.dependencies['ts-node']).not.toBeUndefined();
    });

    test('ts-node dependency is not a empty string', () => {
        expect(packageJsonModel.dependencies['ts-node'].length).toBeGreaterThan(0);
    });

    test('ts-node dependency is matching version string', () => {
        expect(packageJsonModel.dependencies['ts-node']).toMatch(versionRegEx);
    });

    test('typescript dependency is not null', () => {
        expect(packageJsonModel.dependencies['typescript']).not.toBeNull();
    });

    test('typescript dependency is not undefined', () => {
        expect(packageJsonModel.dependencies['typescript']).not.toBeUndefined();
    });

    test('typescript dependency is not a empty string', () => {
        expect(packageJsonModel.dependencies['typescript'].length).toBeGreaterThan(0);
    });

    test('typescript dependency is matching version string', () => {
        expect(packageJsonModel.dependencies['typescript']).toMatch(versionRegEx);
    });

    test('@types/node dependency is not null', () => {
        expect(packageJsonModel.dependencies['ts-node']).not.toBeNull();
    });

    test('@types/node dependency is not undefined', () => {
        expect(packageJsonModel.dependencies['ts-node']).not.toBeUndefined();
    });

    test('@types/node dependency is not a empty string', () => {
        expect(packageJsonModel.dependencies['ts-node'].length).toBeGreaterThan(0);
    });

    test('@types/node dependency is matching version string', () => {
        expect(packageJsonModel.dependencies['@types/node']).toMatch(versionRegEx);
    });
});

describe('when ts-node is not selected, put ts dependencies in devDependencies field', () => {
    let packageJsonModel: PackageJsonModel;

    beforeAll(() => {
        const answers: Answers = {
            packageName: 'test',
            version: '0.0.1',
            description: 'test description',
            entryPoint: 'app',
            author: 'jest',
            license: 'MIT',
            tsnode: false,
        };

        packageJsonModel = new PackageJsonModel(answers, '');
    });

    test('ts-node dependency is not null', () => {
        expect(packageJsonModel.devDependencies['ts-node']).not.toBeNull();
    });

    test('ts-node dependency is not undefined', () => {
        expect(packageJsonModel.devDependencies['ts-node']).not.toBeUndefined();
    });

    test('ts-node dependency is not a empty string', () => {
        expect(packageJsonModel.devDependencies['ts-node'].length).toBeGreaterThan(0);
    });

    test('ts-node dependency is matching version string', () => {
        expect(packageJsonModel.devDependencies['ts-node']).toMatch(versionRegEx);
    });

    test('typescript dependency is not null', () => {
        expect(packageJsonModel.devDependencies['typescript']).not.toBeNull();
    });

    test('typescript dependency is not undefined', () => {
        expect(packageJsonModel.devDependencies['typescript']).not.toBeUndefined();
    });

    test('typescript dependency is not a empty string', () => {
        expect(packageJsonModel.devDependencies['typescript'].length).toBeGreaterThan(0);
    });

    test('typescript dependency is matching version string', () => {
        expect(packageJsonModel.devDependencies['typescript']).toMatch(versionRegEx);
    });

    test('@types/node dependency is not null', () => {
        expect(packageJsonModel.devDependencies['ts-node']).not.toBeNull();
    });

    test('@types/node dependency is not undefined', () => {
        expect(packageJsonModel.devDependencies['ts-node']).not.toBeUndefined();
    });

    test('@types/node dependency is not a empty string', () => {
        expect(packageJsonModel.devDependencies['ts-node'].length).toBeGreaterThan(0);
    });

    test('@types/node dependency is matching version string', () => {
        expect(packageJsonModel.devDependencies['@types/node']).toMatch(versionRegEx);
    });
});
