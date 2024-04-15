const express = require("express");
const router = express.Router();
const { Users } = require('../models');

router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Checking if user exists already
        const existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists' });
            return;
        }

        // Creating the new user
        await Users.create({ firstName, lastName, email, password });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Authenticating the user
router.get("/login", async (req, res) => {
    try {
        const { email, password } = req.query;
        const user = await Users.findOne({ where: { email, password } });
        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        res.status(200).json({ message: 'Authentication successful', user });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
