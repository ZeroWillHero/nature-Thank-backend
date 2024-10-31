const router = require('express').Router();
const createOrder = require('./controllers/createOrder');

router.post('/add',createOrder);

module.exports = router;