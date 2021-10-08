module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  },

  modulePaths: ['<rootDir>'],
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleDirectories: ['node_modules', 'src']
}
