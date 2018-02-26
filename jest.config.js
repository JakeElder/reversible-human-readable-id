// jest.config.js
module.exports = {
  verbose: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!jest.config.js'
  ]
};
