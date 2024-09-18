const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const resetPassword = async (req,res) => {
    const { token, password } = req.body;
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decodedToken.id });
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }else {
            // update the password of the user 
            const hashedPassword = await bcrypt.hash(password,10);
            user.password = hashedPassword;
            await user.save();
            return res.status(200).json({
                message: 'Password updated successfully'
            });
        }
    }catch(error){
        return res.status(400).json({
            message : 'invalid token'
        })
    }
}

module.exports = resetPassword;