const express = require('express')
const { customerCrud } = require('../crud')
const { isLoggedIn } = require('./middlewares')
const router = express.Router()
const update = require('../utils/multer')

// cutomer 정보 제공
router.get('/me', isLoggedIn, async (req, res, next) => {
  try {
    const customer = await customerCrud.findById(req.user)
    res.status(200).json(customer)
  } catch(err) {
    next(err)
  }
})

router.put('/me/profile', isLoggedIn, update.single('profile'), async (req, res, next) => {
  try {
    const result = await customerCrud.updateProfile(req.user, req.file.filename)
    res.status(200).json(req.file.filename)
  } catch(err) {
    next(err)
  }
})

router.put('/me/nickname', isLoggedIn, async (req, res, next) => {
  try {
    const result = await customerCrud.updateNickname(req.user, req.body.nickname)
    res.status(200).json({message: '업데이트 성공'})
  } catch(err) {
    next(err)
  }
})

module.exports = router