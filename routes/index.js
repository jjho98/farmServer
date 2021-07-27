const express = require('express');
const router = express.Router();

const auth = require('./auth')
const seller = require('./seller')
const delivery = require('./delivery')
const product = require('./product')

router.use('/auth', auth)
router.use('/seller', seller)
router.use('/delivery', delivery)
router.use('/product', product)

module.exports = router;
