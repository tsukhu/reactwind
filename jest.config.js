module.exports = {
    transform: {
      // be careful not to add 'ts-jest'
      '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js'
    },
  };