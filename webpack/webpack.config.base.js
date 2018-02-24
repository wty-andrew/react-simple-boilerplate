const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    path: path.join(__dirname, '../public'),
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
  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
}
