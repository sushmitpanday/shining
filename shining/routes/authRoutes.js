const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');

// POST request for login
router.post('/login', loginUser);

module.exports = router;