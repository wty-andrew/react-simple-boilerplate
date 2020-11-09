const devConfig = require('./config/webpack/webpack.config.dev')
const prodConfig = require('./config/webpack/webpack.config.prod')
const demoConfig = require('./config/webpack/webpack.config.demo')

module.exports = (env) => {
  if (env.development) return devConfig
  if (env.production) return prodConfig
  if (env.demo) return demoConfig

  throw new Error('No matching configuration was found!')
}
