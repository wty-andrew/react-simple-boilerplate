const path = require('path')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.join(__dirname, '../../src/MyComponent.js'),
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'MyComponent.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
  },
})
