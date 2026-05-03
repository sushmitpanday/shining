const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    jobImage: { type: String }, // Image ka URL ya path store hoga
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);