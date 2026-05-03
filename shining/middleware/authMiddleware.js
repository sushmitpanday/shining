const authMiddleware = (req, res, next) => {
    // Hum check kar rahe hain ki session ya token hai ya nahi
    // Abhi ke liye simple logic:
    const isAdmin = req.headers['is-admin']; // Ya localstorage se check

    if (isAdmin === 'true') {
        next();
    } else {
        res.status(401).json({ message: "Access Denied: Admin only" });
    }
};

module.exports = authMiddleware;