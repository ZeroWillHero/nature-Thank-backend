const express = require('express');
// create router 
const router = express.Router();
const uploadImages = require('../../middlewares/imageUpload');
// import controller
const register = require('./controllers/register');
const emailVerify = require('./controllers/emailVerify');
const login = require('./controllers/login');
const forgetPassword = require('./controllers/forgetPassword');
const getUsers = require('./controllers/getUser').getUsers;
const getUser = require('./controllers/getUser').getUser;
const changePassword = require('./controllers/passwordResetEmail');
const passwordReset = require('./controllers/resetPassword');
const regAdmin = require('./controllers/adminReg');
const confirmAdmin = require('./controllers/adminConfirm');
const updateUser = require('./controllers/updateUser');
const confirmResend = require('./controllers/resendConfirm');

// create route 
router.post('/register', register);
router.get('/verify/:token', emailVerify);
router.post('/login', login);
router.post('/forgetpassword', forgetPassword);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.get('/changepassword/:token',changePassword);
router.post('/resetpassword',passwordReset);
router.post('/admin/register',regAdmin);
router.get('/confirm/:token',confirmAdmin); 
router.patch('/update/:id',uploadImages.array('images', 10),updateUser);  
router.post('/resend',confirmResend);


// export router
module.exports = router;