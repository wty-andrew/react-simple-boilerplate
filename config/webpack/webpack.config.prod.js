const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')

const extractSass = new ExtractTextPlugin({
  filename: 'css/style.css',
})

module.exports = merge(baseConfig, {
  entry: {
    bundle: path.join(__dirname, '../../src/index.js'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /(\.css|\.scss)$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    extractSass,
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../../src/assets/index.html'),
      filname: 'index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),
  ],
})
