const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes import
const authRoutes = require('./routes/authRoutes');

const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Health Check / Root Route
// Isse "Cannot GET /" wala error khatam ho jayega
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Shining Placement API is live and running!",
        timestamp: new Date().toISOString()
    });
});

// 3. Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => {
        console.error("❌ DB Connection Error:", err.message);
        process.exit(1); // Agar DB connect na ho toh process exit kar dein
    });

// 4. Routes Mapping
app.use('/api/auth', authRoutes);

// 5. Global Error Handler (Acha practice hai debugging ke liye)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Server mein kuch internal error aa gaya hai!"
    });
});

// 6. Port Selection
// Render process.env.PORT automatically provide karta hai
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});