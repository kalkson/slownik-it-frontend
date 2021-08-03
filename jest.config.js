module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: [
    './.next/',
    './node_modules/',
    './coverage',
    './dist',
  ],
  moduleDirectories: ['./node_modules', './.', './pages', '/tests'],
  moduleNameMapper: {
    '@src/(.*)': './src/$1',
    '@pages/(.*)': './pages/$1',
    '@styles/(.*)': './styles/$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}
