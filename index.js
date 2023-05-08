/* 'use strict'

const app = require('./mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err,res) => {
  if (err) {
    return console.log('Error al conectarse con la base de datos: ${err}');
  }
  console.log('Conectado con la base de datos');

  app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}`);
  })
}) */