const router = require('express').Router();
const addToCart = require('./controllers/addCart');
const deleteCart = require('./controllers/deleteCart');
const updateCart = require('./controllers/updateCart');

router.post('/add', addToCart);
router.delete('/delete/:id',deleteCart);
router.patch('/update/:id',updateCart);

module.exports = router;