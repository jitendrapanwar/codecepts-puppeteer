exports.config = {
  tests: './e2e/**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecepts-puppeteer'
}