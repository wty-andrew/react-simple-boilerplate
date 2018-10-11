const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  entry: {
    bundle: path.join(__dirname, '../../src/index.js'),
  },
  output: {
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../../src/assets/index.html'),
      filname: 'index.html',
    }),
  ],
})
