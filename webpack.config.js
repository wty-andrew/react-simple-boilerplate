const path = require('path')
const webpack = require('webpack')

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const entry = DEVELOPMENT
  ? [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'src/index.js'),
    ]
  : path.resolve(__dirname, 'src/index.js')

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
