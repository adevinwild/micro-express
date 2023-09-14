export default {
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: 'coverage',
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testRegex: '/src/.*\\.test\\.ts$',
    transform: { '^.+\\.[jt]s$': ['ts-jest', { useESM: true }] },
};
