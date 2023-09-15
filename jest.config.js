module.exports = {
    transform: {
        '^.+\\.[jt]s?$': [
            'ts-jest',
            { isolatedModules: false, tsconfig: 'tsconfig.spec.json' },
        ],
    },
    modulePathIgnorePatterns: ['__fixtures__'],
    testEnvironment: `node`,
    moduleFileExtensions: [`js`, `jsx`, `ts`, `tsx`, `json`],
};
