const express = require('express')
const {uploadImage} = require('../controllers/imageUploader')
const router = express.Router();

router.route('/uploads').post(uploadImage)

module.exports = router