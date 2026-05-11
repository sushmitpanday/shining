const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Render par '/tmp' folder hamesha writable hota hai
// Local par hum 'uploads' folder use karenge
const uploadDir = process.env.NODE_ENV === 'production' ? '/tmp' : './uploads';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype.includes('msword') || file.mimetype.includes('officedocument')) {
        cb(null, true);
    } else {
        cb(new Error('Sirf PDF ya Doc files hi allowed hain!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

module.exports = upload;