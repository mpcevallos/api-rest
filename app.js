'use strict'

// Se definen constantes requeridas para funcionamiento del APP
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')
const mongoose = require('mongoose')
/* const config = require('./config') */

// Se definen funciones de body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

// El app se ejecutará en el puerto 3001
app.listen (3001, () => {
console.log('API RESTful esta ejecutándose en el puerto ${3001}')
})

    mongoose
    .set('strictQuery', false) // Los campos especificados en el Schema serán almacenados en la base de datos
    .connect('mongodb://localhost:27017/store')
    .then(() => console.log(`Conectado a la base de datos`))
    .catch(error => console.error(error));