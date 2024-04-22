const express = require('express');
const router = express.Router();
const { Products, Categories } = require('../models'); 

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Products.findAll({ include: Categories });
        res.json(products);
    } catch (err) {
        console.error('Error fetching products: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    const { name, description, price, stock, category_id } = req.body;

    try {
        const category = await Categories.findByPk(category_id); 
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }

        const newProduct = await Products.create({ name, description, price, stock, category_id }); 
        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error creating product: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET a specific product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Products.findByPk(id, { include: Categories }); 
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
    } catch (err) {
        console.error('Error fetching product: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update a product by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, category_id } = req.body;

    try {
        const product = await Products.findByPk(id); 
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        // Update product fields
        product.name = name;
        product.description = description;
        product.price = price;
        product.stock = stock;
        product.category_id = category_id;

        await product.save(); 
        res.json(product);
    } catch (err) {
        console.error('Error updating product: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Products.findByPk(id); 
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        await product.destroy(); 
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error('Error deleting product: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
