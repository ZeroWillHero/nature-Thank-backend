const express = require('express');
// create router 
const router = express.Router();
// import controller
const register = require('./controllers/register');
const emailVerify = require('./controllers/emailVerify');
const login = require('./controllers/login');
const forgetPassword = require('./controllers/forgetPassword');
const getUsers = require('./controllers/getUser').getUsers;
const getUser = require('./controllers/getUser').getUser;

// create route 
router.post('/register', register);
router.get('/verify/:token', emailVerify);
router.post('/login', login);
router.post('/forgetpassword', forgetPassword);
router.get('/users', getUsers);
router.get('/user/:id', getUser);


// export router
module.exports = router;


