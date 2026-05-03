const express = require('express');
const router = express.Router();
const upload = require('../middleware/jobMiddleware');
const { postNewJob, deleteJobById, getAllPlacements } = require('../controllers/JobController');

// Nayi job dalne ke liye
router.post('/add-job', upload.single('jobImage'), postNewJob);

// Saari jobs dekhne ke liye
router.get('/list-jobs', getAllPlacements);

// Job delete karne ke liye (ID ke saath)
router.delete('/delete-job/:id', deleteJobById);

module.exports = router;