const devConfig = require('./webpack/webpack.config.dev')
const prodConfig = require('./webpack/webpack.config.prod')

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = PRODUCTION ? prodConfig : devConfig
