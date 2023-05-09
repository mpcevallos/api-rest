'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Define el schema del modelo
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    category: String,
    description: String
});

// Crea el modelo a partir del schema
const Product = mongoose.model('Product', ProductSchema);

// Conecta con la base de datos
mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(error => console.error(error));

// Configura el middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define las rutas
app.get('/api/product', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al realizar el pedido.' });
    }
});

app.get('/api/product/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'El producto no existe.' });
        }
        res.status(200).json({ product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al realizar el pedido.' });
    }
});

app.post('/api/product', async (req, res) => {
    const product = new Product(req.body);
    try {
        const productStored = await product.save();
        res.status(200).json({ product: productStored });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error guardando en la base de datos.' });
    }
});

app.put('/api/product/:productId', async (req, res) => {
    const productId = req.params.productId;
    const update = req.body;
    try {
        const productUpdated = await Product.findByIdAndUpdate(productId, update, { new: true });
        res.status(200).json({ product: productUpdated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar el producto.' });
    }
});

app.delete('/api/product/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        await Product.findByIdAndDelete(productId);
        res.status(204).json({ message: 'El producto ha sido eliminado.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `Error al borrar el producto: ${err}` });
    }
});

// Inicia el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API RESTful está ejecutándose en el puerto ${PORT}`);
});
