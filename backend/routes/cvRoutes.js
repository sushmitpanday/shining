const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { uploadCV } = require('../controllers/cvController');

// Main API Route
router.post('/upload-cv', upload.single('cv'), uploadCV);

module.exports = router;