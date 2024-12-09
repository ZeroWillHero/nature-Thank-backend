const jwt = require('jsonwebtoken');
const User = require('./../models/User');

const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
    const token = authHeader.split(' ')[1];
    if (!authHeader) {
        return res.status(401).send({ error: 'Access Denied: No token provided' });
    }

    if (!token) {
        return res.status(401).send({ error: 'Access Denied: Malformed token' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email : verified.email });
    if (!user) {
        return res.status(401).send({ error: 'Access Denied: User not found' });
    }

    if (user.role !== 'admin') {
        return res.status(403).send({ error: 'Access Denied: Insufficient permissions' });
    }

    next();
    }catch(error){
        res.status(500).send({ error: error.message });
    }

};

module.exports = adminAuth;