const job = require('../models/job');
const fs = require('fs');
const path = require('path');

// 1. Post Job
exports.postNewJob = async(req, res) => {
    try {
        const { title, description } = req.body;
        if (!req.file) return res.status(400).json({ message: "Image upload fail hui!" });

        // req.file.path ab seedha "https://res.cloudinary.com/..." wala link hai
        const jobImage = req.file.path;

        const newJob = new job({ title, description, jobImage });
        await newJob.save();

        res.status(201).json({ success: true, job: newJob });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Delete Job
exports.deleteJobById = async(req, res) => {
    try {
        const foundJob = await job.findById(req.params.id);
        if (!foundJob) return res.status(404).json({ message: "Job nahi mili!" });

        // Note: Cloudinary se delete karne ka logic alag hota hai, 
        // par abhi ke liye database se delete karna kaafi hai.
        await job.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Job deleted!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Get All Jobs
exports.getAllPlacements = async(req, res) => {
    try {
        const jobs = await job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};