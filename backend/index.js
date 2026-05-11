const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const cvRoutes = require('./routes/cvRoutes'); // Ye naya route import karo

const app = express();

app.use(cors());
app.use(express.json());

if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes - Yahan sirf connection hona chahiye
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api', cvRoutes); // Isse /api/upload-cv chalega

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "API is Live!" });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
    })
    .catch(err => console.error("❌ DB Error:", err));