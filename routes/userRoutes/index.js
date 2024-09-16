const express = require('express');
// create router 
const router = express.Router();
// import controller
const register = require('./controllers/register');
const emailVerify = require('./controllers/emailVerify');
const login = require('./controllers/login');
const forgetPassword = require('./controllers/forgetPassword');

// create route 
router.post('/register', register);
router.get('/verify/:token', emailVerify);
router.post('/login', login);
router.post('/forgetpassword', forgetPassword);

// export router
module.exports = router;


