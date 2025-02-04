const express = require('express');
const Product = require('../models/Product');
const upload = require('../config/cloudinaryConfig');
const getNextSequence = require('../getNextSequence');
const auth = require('../middleware/auth');

const router = express.Router();

// Read Data Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Data Products
router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, price } = req.body;
        const imageUrl = req.file.path;

        const newId = await getNextSequence('products');
        const newProduct = new Product({ _id: newId, title, price, imageUrl });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error saat membuat produk:', err);
        res.status(400).json({ message: err.message });
    }
});

// Update Data Products
router.put('/:id', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, price } = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Produk tidak ditemukan' });
        }

        if (req.file) {
            product.imageUrl = req.file.path;
        }

        product.title = title;
        product.price = price;
        await product.save();

        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Data Products
router.delete('/:id', auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produk tidak ditemukan' });
        }
        res.json({ message: 'Produk berhasil dihapus', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;