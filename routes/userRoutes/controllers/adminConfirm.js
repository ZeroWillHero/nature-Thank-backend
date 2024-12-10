const User = require('./../../../models/User');
const jwt = require('jsonwebtoken');

const confirmRegAdmin = async (req, res) => {
    try {
        const token = req.params.token;
        const { email } = jwt.decode(token);
        console.log(email);

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }

        user.confirmed = true;
        await user.save();

        res.status(200).json({
            message: 'User confirmed'
        });
         
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

module.exports = confirmRegAdmin;