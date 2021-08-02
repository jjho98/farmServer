const express = require('express')
const { customerCrud, cartItemCrud } = require('../crud')
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

// 유저 프로필 변경
router.put('/me/profile', isLoggedIn, update.single('profile'), async (req, res, next) => {
  try {
    const result = await customerCrud.updateProfile(req.user, req.file.filename)
    res.status(200).json(req.file.filename)
  } catch(err) {
    next(err)
  }
})

// 유저 닉네임 변경
router.put('/me/nickname', isLoggedIn, async (req, res, next) => {
  try {
    const result = await customerCrud.updateNickname(req.user, req.body.nickname)
    res.status(200).json({message: '업데이트 성공'})
  } catch(err) {
    next(err)
  }
})

// 유저 장바구니에 추가
router.put('/cart', isLoggedIn, async (req, res, next) => {
  try {
    const {selectedOptions} = req.body
    for (let i = 0; i < selectedOptions.length; i++) {
      const option = selectedOptions[i]
      await cartItemCrud.addToCart(option.id, option.count, req.user)
    }
    return res.status(200).json({message: '장바구니 담기 성공'})
  } catch(err) {
    next(err)
  }
})

// 유저 장바구니 정보 받기
router.get('/cart', isLoggedIn, async (req, res, next) => {
  try {
    const result = await cartItemCrud.getCart(req.user)
    return res.status(200).json(result)
  } catch(err) {
    next(err)
  }
})

module.exports = router