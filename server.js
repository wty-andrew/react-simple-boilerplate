const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const app = express()

const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PRODUCTION = process.env.NODE_ENV === 'production'

if (DEVELOPMENT) {
  const compiler = webpack(webpackConfig)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    })
  )
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use(express.static(path.join(__dirname, './public')))
}

const htmlPath = PRODUCTION
  ? path.join(__dirname, './public/index.html')
  : path.join(__dirname, './src/index.html')

app.get('*', (req, res) => {
  res.sendFile(htmlPath)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, err => {
  if (!err) {
    /* eslint-disable no-console */
    console.log(`Server is running on port ${PORT}`)
  }
})
