module.exports = {
  displayName: 'calendar',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: '../../coverage/apps/calendar',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
};
