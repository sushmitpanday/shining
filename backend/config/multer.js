const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Render par '/tmp' use karna best hai, Local par 'uploads'
const isProduction = process.env.NODE_ENV === 'production';
const uploadDir = isProduction ? '/tmp' : path.join(__dirname, '../uploads');

// Folder create check
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'cv-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

module.exports = upload;