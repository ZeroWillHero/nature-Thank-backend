const router = require('express').Router();
const addProduct = require('./controllers/addProducts');
const uploadImages = require('./../../middlewares/imageUpload');
const getProducts = require('./controllers/getProduct').getProducts;
const getProduct = require('./controllers/getProduct').getProduct;


router.post('/add', uploadImages.array('images', 10), addProduct);
router.get('/get',getProducts);
router.get('/get/:id',getProduct);

module.exports = router;