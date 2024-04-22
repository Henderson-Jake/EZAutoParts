const jwt = require('jsonwebtoken');

// This function is to generate a authentication token for the user once they login
const generateToken = (userId) => {
    // in real life, this secretKey should be top secret, but for the project's purposes, im not using it.
    const secretKey = 'secret_key';
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    return token;
};

module.exports = generateToken;
