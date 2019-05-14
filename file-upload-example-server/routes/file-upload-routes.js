const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary-setup')

router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  if (!req.file) {
    return next(new Error('No file uploaded!'));
  }

  res.json({ secure_url: req.file.secure_url });
})

module.exports = router