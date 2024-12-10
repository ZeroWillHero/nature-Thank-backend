const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads') // Ensure this path is correct and accessible
  },
  filename: function (req, file, cb) {
   
    cb(null, file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only .jpg and .jpeg format allowed!'), false);
  }
};

const uploadImages = multer({ 
  storage: storage,
  fileFilter: fileFilter
});

module.exports = uploadImages;