const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const changePassword = async (req, res) => {
    try {
        const token = req.params.token;
        let decodedToken;

        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return res.status(400).json({
                message: 'Invalid token'
            });
        }

        const id = decodedToken.id;
        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }

        const filePath = path.join(__dirname, 'public', 'password.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error reading file'
                });
            }
            res.send(data);
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

    
}

module.exports = changePassword;