const multer = require('multer');
const path = require('path');

// 1. Malik, yahan batayenge ki file kahan aur kis naam se save hogi
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Backend root mein 'uploads' folder hona zaroori hai
    },
    filename: (req, file, cb) => {
        // File ka naam unique rakhne ke liye timestamp jod rahe hain
        cb(null, "JOB_POST_" + Date.now() + path.extname(file.originalname));
    }
});

// 2. File check karne ka filter (Taaki koi virus ya galat file na daal de)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const isMatch = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeMatch = allowedTypes.test(file.mimetype);

    if (isMatch && mimeMatch) {
        return cb(null, true);
    } else {
        cb(new Error("Sir, sirf Images (JPG, PNG, WEBP) hi upload kar sakte hain!"));
    }
};

// 3. Final Middleware Export
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Malik, 5MB se badi image allow nahi hogi
});

module.exports = upload;