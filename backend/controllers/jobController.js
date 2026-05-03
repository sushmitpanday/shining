const Job = require('../models/Job');
const fs = require('fs');
const path = require('path');

// 1. Post Job
exports.postNewJob = async(req, res) => {
    try {
        const { title, description } = req.body;
        if (!req.file) return res.status(400).json({ message: "Image upload fail hui!" });

        const jobImage = `/uploads/${req.file.filename}`;
        const newJob = new Job({ title, description, jobImage });
        await newJob.save();

        res.status(201).json({ success: true, job: newJob });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Delete Job (With Image Cleanup)
exports.deleteJobById = async(req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: "Job nahi mili!" });

        // Folder se image delete karna
        if (job.jobImage) {
            const fullPath = path.join(__dirname, '..', job.jobImage);
            if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
        }

        await Job.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Job deleted!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Get All Jobs
exports.getAllPlacements = async(req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};