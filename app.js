'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

// 👇️ handle uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app