const jwt = require('jsonwebtoken');
const User = require('./../models/User');

const userAuth = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({ error: 'Access Denied' });
    }


    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = User.findOne({ email : verified.email });
    if (!user) {
        return res.status(401).send({ error: 'Access Denied' });
    }

    next();

}

module.exports = userAuth;