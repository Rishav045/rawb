const express = require('express')
const router = express.Router();
const {createPin,getPin,getAllPin,updatePin} = require('../controllers/Pin')

router.post('/createpin',createPin)
router.put('/updatePin',updatePin)
router.get('/getPin/:pin_id',getPin)
router.get('/getAllPin',getAllPin)

module.exports = router