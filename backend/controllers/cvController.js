const nodemailer = require('nodemailer');

exports.uploadCV = async(req, res) => {
    try {
        const { name, email, phone } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ success: false, message: "CV file is required" });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            pool: true,
            auth: {
                user: 'shiningplacement01@gmail.com',
                pass: 'bysvubzlazasdolc' // Use Environment Variable in Production
            },
            tls: { rejectUnauthorized: false }
        });

        const mailOptions = {
            from: `"Shining Placement" <shiningplacement01@gmail.com>`,
            to: 'shiningplacement01@gmail.com', // Client ka real email yahan daal sakte ho
            subject: `New Career Inquiry: ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #4f46e5;">New Job Application</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
            `,
            attachments: [{
                filename: file.originalname,
                path: file.path // Multer se aaya hua path
            }]
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true, message: "CV sent successfully!" });

    } catch (error) {
        console.error("Mail Error:", error);
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};