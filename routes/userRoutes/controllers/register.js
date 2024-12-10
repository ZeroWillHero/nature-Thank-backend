const User = require('../../../models/User');
const sendMail = require('../../../manager/mail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const register = async (req, res) => {
    // Read req body
    const { firstname, lastname, email, password, role = 'user' } = req.body;

    // Check if user already exists
    const existUser = await User.findOne({ email });

    if (existUser) {
        return res.status(400).json({
            message: 'User already exists'
        });
    }

    try {

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password : hashedPassword,
            role
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

        await newUser.save();
        sendMail(email, "register",token);
        return res.status(201).json({
            message: 'User created successfully',
            user : newUser
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = register;