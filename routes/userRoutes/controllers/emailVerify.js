const User = require('../../../models/User');
const sendMail = require('../../../manager/mail');
const jwt = require('jsonwebtoken'); // Import jwt module

// Register a new user
const emailVerify = async (req, res) => {
    const token = req.params.token; // Use req.params to get the token from the URL
    let decodedToken;

    console.log(token);

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid token'
        });
    }

    const user = await User.findOne({ _id: decodedToken.id });

    if (!user) {
        return res.status(400).json({
            message: 'Invalid token'
        });
    }

    user.confirmed = true;
    await user.save();

    // Send confirmation email
    await sendMail(user.email, 'Account Confirmed', 'Your account has been successfully confirmed.');

    return res.status(200).json({
        message: 'User confirmed successfully'
    });
};

module.exports = { emailVerify };

module.exports = emailVerify;