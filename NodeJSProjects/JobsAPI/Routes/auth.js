const express = require('express');
const router = express.Router();

const { login, register } = require('../Controllers/auth.js');

router.post('/register', register);
router.post('/login', login);

module.exports = router