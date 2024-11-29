const express = require('express');
const router = express.Router();

const { authentification } = require('../Controllers/auth');

// router.post('/', authentification)

router.route('/').post(authentification);

module.exports = router;