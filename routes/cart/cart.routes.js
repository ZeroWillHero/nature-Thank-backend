const router = require('express').Router();
const addToCart = require('./controllers/addCart');
const deleteCart = require('./controllers/deleteCart');

router.post('/add', addToCart);
router.delete('/delete/:id',deleteCart);

module.exports = router;