'use strict'

const execSync = require('child_process').execSync

const defaultConfig = {
  integration: 'connect',
  repo: 'https://github.com/senchalabs/connect/',
  testType: 'mocha',
  testArgs: '--require test/support/env --reporter spec --check-leaks test/',
  setup: function (cwd) {
    execSync('npm install', { cwd })
  }
}

const testConfigs = [
  {
    branch: '2.30.2'
  },
  {
    branch: '3.0.0'
  },
  {
    branch: undefined
  }
]

module.exports = {
  defaultConfig,
  testConfigs
}