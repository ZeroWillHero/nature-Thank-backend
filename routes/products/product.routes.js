const router = require('express').Router();
const addProduct = require('./controllers/addProducts');
const uploadImages = require('./../../middlewares/imageUpload');

router.post('/add', uploadImages.array('images', 10), addProduct);
module.exports = router;