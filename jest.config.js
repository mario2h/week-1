module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/test',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/?(*.)+(spec).(ts|tsx)?(x)',
  ],
  collectCoverageFrom: [
  'src/**/*.{ts, tsx}',
  '!**/node_modules/**',
  '!**/vendor/**',
  ],
}