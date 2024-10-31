const router = require('express').Router();
const addProduct = require('./controllers/addProducts');
const uploadImages = require('./../../middlewares/imageUpload');
const getProducts = require('./controllers/getProduct').getProducts;
const getProduct = require('./controllers/getProduct').getProduct;
const updateProduct = require('./controllers/updateProduct');
const deleteProduct = require('./controllers/deleteProduct');
const adminAuth = require('./../../middlewares/adminAuth');



router.post('/add', uploadImages.array('images', 10),adminAuth,addProduct);
router.get('/get',getProducts);
router.get('/get/:id',getProduct);
router.patch('/update/:id',uploadImages.array('images', 10),adminAuth,updateProduct);
router.delete('/delete/:id',deleteProduct);



module.exports = router;