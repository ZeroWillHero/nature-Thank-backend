const User = require('./../../../models/User');

const resendConfirm = async (req,res ) => {
    const { email} = req.body;
    const user = User.findOne({
        email : email
    })

    if(!user){
        return res.status(400).json({
            message : 'User not found'
        });
    }

    if (user.confirmed){
        res.status(400).json({
            message : 'User already confirmed'
        })
    }

    // send confirmation email 
    
 }

module.exports = resendConfirm;