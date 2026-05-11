const nodemailer = require('nodemailer');

exports.uploadCV = async(req, res) => {
    try {
        const { name, email, phone } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ success: false, message: "CV file is required" });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'shiningplacement01@gmail.com',
                pass: 'bysvubzlazasdolc'
            },
        });

        const mailOptions = {
            from: 'shiningplacement01@gmail.com',
            to: 'shiningplacement01@gmail.com',
            subject: `New Job Application: ${name}`,
            text: `Candidate Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
            attachments: [{
                filename: file.originalname,
                path: file.path
            }]
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "CV sent to HR successfully!" });

    } catch (error) {
        console.error("❌ Mail Error:", error);
        res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
    }
};