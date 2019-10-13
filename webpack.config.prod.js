const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, './src/MyComponent.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'my-component.js',
    libraryTarget: 'commonjs2',
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
  plugins: [new MiniCssExtractPlugin({ filename: 'my-component.css' })],
  externals: {
    react: 'react',
  },
})
