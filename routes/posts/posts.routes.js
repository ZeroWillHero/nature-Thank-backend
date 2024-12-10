const router = require('express').Router(); 
const upload = require('../../middlewares/mediaUpload');

const createPost = require('./controllers/createPost');
const getPosts = require('./controllers/getPosts').getPosts;


router.post('/create',upload.array('media',10), createPost);
router.get('/get', getPosts);

module.exports = router;