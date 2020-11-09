const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.join(__dirname, '../../example/index.js'),
  output: {
    path: path.join(__dirname, '../../demo'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../../example/assets/index.html'),
      filename: 'index.html',
    }),
  ],
})
