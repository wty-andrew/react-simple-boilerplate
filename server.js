const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')

const app = express()

const DEVELOPMENT = process.env.NODE_ENV === 'development'

if (DEVELOPMENT) {
  app.use(
    webpackDevMiddleware(webpack(webpackConfig), {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    })
  )
}

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, err => {
  if (!err) {
    /* eslint-disable no-console */
    console.log(`Server is running on port ${PORT}`)
  }
})
