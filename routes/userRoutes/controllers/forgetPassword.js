const User = require('../../../models/User');
const bcrypt = require('bcrypt');
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
        const url = `${process.env.HOST}/api/user/resetpassword/${token}`;
        await sendEmail(email, 'forgetPassword', url);



    }catch(error) {

    }
}

module.exports = forgetPassword;