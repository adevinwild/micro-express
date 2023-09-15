const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s?$';

module.exports = {
    collectCoverageFrom: ['src/**/*.ts', '__tests__/**/*.ts'],
    coverageDirectory: 'coverage',
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testRegex,
    transform: { '^.+\\.[jt]s$': ['ts-jest', { useESM: true }] },
};
