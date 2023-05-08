'use strict';
const db = require('../models/product');

// Función que nos permite obtener todos los productos de la base de datos
function getProduct(req, res) {
    const productId = req.params.productId;
    db.Product.findById(productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({ message: 'El producto no existe.' });
            }
            res.status(200).send({ product });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error al realizar el pedido.' });
        });
}

// Función que nos permite obtener productos por ID
function getProducts(req, res) {
    db.Product.find()
        .then(products => {
            res.status(200).send({ products });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error al realizar el pedido.' });
        });
}

// Función que nos permite hacer un POST y almacenar un nuevo producto 
function saveProduct(req, res) {
    const product = new db.Product(req.body);
    product.save()
        .then(productStored => {
            res.status(200).send({ product: productStored });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error guardando en la base de datos.' });
        });
}

// Función que nos permite hacer un PUT y actualizar un producto existente
function updateProduct(req, res) {
    const productId = req.params.productId;
    const update = req.body;
    db.Product.findByIdAndUpdate(productId, update, { new: true })
        .then(productUpdated => {
            res.status(200).send({ product: productUpdated });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error al actualizar el producto.' });
        });
}

// Función que nos permite hacer un DELETE y eliminar un producto existente
function deleteProduct(req, res) {
    const productId = req.params.productId;
    db.Product.findByIdAndDelete(productId)
        .then(() => {
            res.status(204).send({ message: 'El producto ha sido eliminado.' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: `Error al borrar el producto: ${err}` });
        });
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct,
};
