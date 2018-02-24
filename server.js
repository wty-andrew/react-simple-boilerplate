const path = require('path')
const express = require('express')

const app = express()

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
