const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../../manager/mail');


const forgetPassword = async (req,res) => {
    const { email } = req.body;
    

    try {
        const existUser = await User.findOne({ email });

        if (!existUser){
            return res.status(400).json({
                message: 'User not found'
            });
        }

        // generate token
        const token = jwt.sign({id: existUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        // send email
        // const url = `${process.env.HOST}/api/user/resetpassword/${token}`;

        try{
        await sendEmail(email, 'forgetPassword', token);
        res.status(200).json({
            message: 'Email sent'
        });

        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }



    }catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = forgetPassword;