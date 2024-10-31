const router = require('express').Router();
const adminAuth = require('./../../middlewares/adminAuth');

const addToCart = require('./controllers/addCart');
const deleteCart = require('./controllers/deleteCart');
const updateCart = require('./controllers/updateCart');
const getCart = require('./controllers/getCart').getCart;
const getCarts = require('./controllers/getCart').getAllCart;


router.post('/add', addToCart);
router.delete('/delete/:id',deleteCart);
router.patch('/update/:id',updateCart);
router.get('/get/:id',getCart);
router.get('/get',adminAuth,getCarts);


module.exports = router;