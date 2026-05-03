const job = require('../models/job'); // Yahan chota j hai
const fs = require('fs');
const path = require('path');

// 1. Post Job
exports.postNewJob = async(req, res) => {
    try {
        const { title, description } = req.body;
        if (!req.file) return res.status(400).json({ message: "Image upload fail hui!" });

        const jobImage = `/uploads/${req.file.filename}`;

        // Yahan 'job' chota kar diya (Bade 'Job' ki jagah)
        const newJob = new job({ title, description, jobImage });
        await newJob.save();

        res.status(201).json({ success: true, job: newJob });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Delete Job (With Image Cleanup)
exports.deleteJobById = async(req, res) => {
    try {
        // Yahan bhi 'job' chota kar diya
        const foundJob = await job.findById(req.params.id);
        if (!foundJob) return res.status(404).json({ message: "Job nahi mili!" });

        // Folder se image delete karna
        if (foundJob.jobImage) {
            const fullPath = path.join(__dirname, '..', foundJob.jobImage);
            if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
        }

        await job.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Job deleted!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Get All Jobs
exports.getAllPlacements = async(req, res) => {
    try {
        // Yahan bhi 'job' chota kar diya
        const jobs = await job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};