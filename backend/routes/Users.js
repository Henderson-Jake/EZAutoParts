const express = require("express");
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const generateToken = require('./generateToken');


router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        //Checking if user exists already
        const existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists' });
            return;
        }

        //Hashing the password
        const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        //Creating the new user with hashed password
        await Users.create({ firstName, lastName, email, password: passwordHash });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //Validating email and password
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await Users.findOne({ where: { email } });

        //Check if user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        //Check if password matches (using bcrypt)
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        //Return a token instead of the entire user object (probably should be entire user to get their info)
        const token = generateToken(user.id);

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
