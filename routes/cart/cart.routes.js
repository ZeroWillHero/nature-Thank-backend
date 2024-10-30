const router = require('express').Router();
const addToCart = require('./controllers/addCart');

router.post('/add', addToCart);

module.exports = router;