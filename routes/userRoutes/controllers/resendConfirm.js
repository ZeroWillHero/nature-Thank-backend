const User = require('./../../../models/User');
const jwt = require('jsonwebtoken');
const sendMail = require('./../../../manager/mail'); // Assuming you have a sendMail utility

const resendConfirm = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }

        if (user.confirmed) {
            return res.status(400).json({
                message: 'User already confirmed'
            });
        }

        // send confirmation email 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

        await sendMail(email, "register", token);

        res.status(200).json({
            message: 'Confirmation email sent'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

module.exports = resendConfirm;