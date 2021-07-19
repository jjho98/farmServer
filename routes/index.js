const express = require('express');
const router = express.Router();

const auth = require('./auth')
const seller = require('./seller')
const delivery = require('./delivery')

router.use('/auth', auth)
router.use('/seller', seller)
router.use('/delivery', delivery)

module.exports = router;
