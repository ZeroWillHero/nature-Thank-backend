const User = require('../../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req,res) =>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});

        // check if user available 
        if (!user){
            return res.status(400).json({
                message: 'User not found'
            });
        }

        // check if password correct

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        // check if user confirmed

        if (!user.confirmed){
            return res.status(400).json({
                message: 'User not confirmed'
            });
        }

        // generate token

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});

        return res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                confirmed: user.confirmed
            }
        });


    }catch (error){
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = login; 