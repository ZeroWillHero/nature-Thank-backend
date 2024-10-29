const router = require('express').Router();
const addProduct = require('./controllers/addProducts');
const uploadImages = require('./../../middlewares/imageUpload');
const getProducts = require('./controllers/getProduct').getProducts;
const getProduct = require('./controllers/getProduct').getProduct;
const updateProduct = require('./controllers/updateProduct');


router.post('/add', uploadImages.array('images', 10), addProduct);
router.get('/get',getProducts);
router.get('/get/:id',getProduct);
router.patch('/update/:id',uploadImages.array('images', 10),updateProduct);


module.exports = router;