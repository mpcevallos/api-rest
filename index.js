'use strict'

const app = require('./app')
const port = process.env.PORT || 3001

const mongoose = require('mongoose');

// 👇️ handle uncaught exceptions
process.on('uncaughtException', function (err) {
  console.log(err);
});

mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos');
  })

  .catch((error) => {
    console.log('Error al conectarse con la base de datos:', error);
  });