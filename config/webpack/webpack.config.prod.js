const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  entry: {
    bundle: path.join(__dirname, '../../src/index.js'),
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../../src/assets/index.html'),
      filname: 'index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})
