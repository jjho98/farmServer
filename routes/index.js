const express = require('express');
const router = express.Router();

const auth = require('./auth')
const delivery = require('./delivery')

router.use('/auth', auth)
router.use('/delivery', delivery)

module.exports = router;
