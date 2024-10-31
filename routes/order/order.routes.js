const router = require('express').Router();
const createOrder = require('./controllers/createOrder');
const getOrder = require('./controllers/getOrder').getOrder;
const getOrders = require('./controllers/getOrder').getOrders;

router.post('/add',createOrder);
router.get('/get',getOrders);
router.get('/get/:id',getOrder);

module.exports = router;