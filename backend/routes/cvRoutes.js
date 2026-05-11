const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { uploadCV } = require('../controllers/cvController');

// Route with basic error handling wrapper
router.post('/upload-cv', (req, res, next) => {
    upload.single('cv')(req, res, (err) => {
        if (err) {
            console.error("Multer Error:", err);
            return res.status(400).json({ success: false, message: err.message });
        }
        next();
    });
}, uploadCV);

module.exports = router;