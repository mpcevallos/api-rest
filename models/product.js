`user strict`

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    brand: String,
    price: String,
    category: String,
    description: String
})
const db = {}
db.Product = mongoose.model('store', ProductSchema, 'products')

module.exports = db