const jwt = require('jsonwebtoken');
const User = require('./../models/User');

const userAuth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token){
        return res.status(401).send({error: 'Access Denied'});
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = User.findOne({_id: verified._id});
        if (!user){
            return res.status(401).send({error: 'Access Denied'});
        }

        next();
    
    }catch(error){
        return res.status(400).send({error: error});
    }
}

module.exports = userAuth;