`user strict`

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    brand: String,
    price: { type: Number, default: 0 },
    category: { type: String,enum: ['deportes','mujer','accesorios','hombre',]},
    description: String
})

module.exports = mongoose.model('Product', ProductSchema)