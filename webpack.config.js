const devConfig = require('./config/webpack/webpack.config.dev')
const prodConfig = require('./config/webpack/webpack.config.prod')

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = PRODUCTION ? prodConfig : devConfig
