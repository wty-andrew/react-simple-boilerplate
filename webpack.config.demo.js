const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, './example/index.js'),
  output: {
    path: path.join(__dirname, './demo'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './example/assets/index.html'),
      filename: 'index.html',
    }),
  ],
})
