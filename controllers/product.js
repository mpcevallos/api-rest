'use strict'; // Add strict mode to the code

const Product = require('../models/product');

function getProduct(req, res) { // Rename the function to `getProduct`
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: 'Error al realizar el pedido.' });
        if (!product) return res.status(404).send({ message: 'El producto no existe.' });

        res.status(200).send({ product });
    });
}

function getProducts(req, res) { // Rename the function to `getProducts`
    Product.find({}, (err, products) => { // Rename `product` to `products` and fix the if statement condition
        if (err) return res.status(500).send({ message: 'Error al realizar el pedido.' });
        if (!products) return res.status(404).send({ message: 'No existen los productos.' });

        res.status(200).send({ products });
    });
}

function saveProduct(req, res) {
    console.log('POST /api/product');
    console.log(req.body);

    let product = new Product();
    product.name = req.body.name;
    product.brand = req.body.brand;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
        if (err) return res.status(500).send({ message: 'Error guardando en la base de datos.' });

        res.status(200).send({ product: productStored });
    });
}

function updateProduct(req, res) {
    let productId = req.params.productId;
    let update = req.body;

    Product.findByIdAndUpdate(productId, update, { new: true }, (err, productUpdated) => { // Add the options parameter to return the updated product
        if (err) return res.status(500).send({ message: 'Error al actualizar el producto.' });

        res.status(200).send({ product: productUpdated });
    });
}

function deleteProduct(req, res) {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}` }); // Fix the template string

        product.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
            res.status(204).send({ message: 'El producto ha sido eliminado.' });
        });
    });
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
};
