const loginUser = (req, res) => {
    const { name, password } = req.body;

    // Hardcoded Credentials
    const ADMIN_NAME = "deepak";
    const ADMIN_PASSWORD = "shining123";

    if (name === ADMIN_NAME && password === ADMIN_PASSWORD) {
        res.status(200).json({
            success: true,
            message: "Login Successful",
            token: "dummy-jwt-token-12345" // Real app mein yahan JWT banta hai
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Invalid Name or Password"
        });
    }
};

module.exports = { loginUser };