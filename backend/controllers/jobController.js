const job = require('../models/job');

// 1. Post Job
exports.postNewJob = async(req, res) => {
    try {
        const { title, description } = req.body;
        if (!req.file) return res.status(400).json({ message: "Image upload fail hui!" });

        const jobImage = req.file.path;

        const newJob = new job({ title, description, jobImage });
        await newJob.save();

        res.status(201).json({ success: true, job: newJob });
    } catch (error) {
        console.error("ASLI ERROR YE HAI:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Delete Job (Only from Database)
exports.deleteJobById = async(req, res) => {
    try {
        await job.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Job deleted from DB!" });
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