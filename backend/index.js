const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const cvRoutes = require('./routes/cvRoutes');

const app = express();

// 1. CORS Configuration (Render ke liye zaroori hai)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Folder Handling (Render/Linux friendly)
// Local pe ye 'uploads' banayega, Render pe ye temporary storage use karega
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

app.use('/uploads', express.static(UPLOADS_DIR));

// 3. Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api', cvRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is Live!",
        environment: process.env.NODE_ENV || 'development'
    });
});

// 4. Database & Server Start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is missing in Env variables!");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error("❌ DB Connection Error:", err.message);
    });