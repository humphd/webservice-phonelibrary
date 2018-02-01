const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Enable json parsing
app.use(bodyParser.json())

// Dependencies
const root_endpoint = require('./routes/index')
const parseText = require('./routes/api/phonenumbers/parse/text')
const parseFile = require('./routes/api/phonenumbers/parse/file')

// GET routes
app.get('/', root_endpoint.get)
app.get('/api/phonenumbers/parse/text/:input', parseText.get)

// POST routes
app.post('/api/phonenumbers/parse/file/', parseFile.post) 

app.listen(3000, function() {
  console.log(`Phone number extractor web service app now listening at port ${this.address().port}`)
})

module.exports = app