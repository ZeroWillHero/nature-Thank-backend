const User = require('./../../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendMail = require('./../../../manager/mail');

const regAdmin = async (req,res) => {
    const {firstname, lastname, email, password} = req.body;

    try {
        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message: 'User already exists'});
        }
        
        const hashedPassword = await bcrypt.hash(password,10); 
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: 'admin',
            confirmed: false
        });

        // create token for the super user to confirm the new admin user
        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn: '1d'});
        // send email to super user 
        await sendMail(process.env.EMAIL_ADDRESS,'adminReg',token,newUser);
        // send email to new admin user 
        await sendMail(email,'admin',token,newUser);
        // save the above user to the database
        await newUser.save();
        res.status(200).json({message: 'We are processing your request', token});
    }catch(error){
        console.log(error);
        res.status(500).json({message: error});
    }
}

module.exports = regAdmin;