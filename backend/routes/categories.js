const express = require('express');
const router = express.Router();
const { Categories } = require('../models'); // Import the Sequelize model

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.findAll(); 
        res.json(categories);
    } catch (err) {
        console.error('Error fetching categories: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST a new category
router.post('/', async (req, res) => {
    const { name } = req.body;

    try {
        const newCategory = await Categories.create({ name }); 
        res.status(201).json(newCategory);
    } catch (err) {
        console.error('Error creating category: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET a specific category by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Categories.findByPk(id); 
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }
        res.json(category);
    } catch (err) {
        console.error('Error fetching category: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update a category by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const category = await Categories.findByPk(id); 
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }
        await category.update({ name }); 
        res.json(category);
    } catch (err) {
        console.error('Error updating category: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Categories.findByPk(id); 
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }
        await category.destroy(); 
        res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        console.error('Error deleting category: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
