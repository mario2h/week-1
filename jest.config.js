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
  coverageDirectory: './test/coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ["html", "text"],
  displayName: {
    name: 'week-1',
    color: 'blue',
  }
}