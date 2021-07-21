const express = require('express')
const router = express.Router()
const passport = require('passport')
const { isNotLoggedIn, isLoggedIn } = require('./middlewares')
const { seller } = require('../crud')
const upload = require('../utils/multer')
const foormidable = require('formidable')

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('localSeller', (authError, user, info) => {
    if (authError) {
      return next(authError)
    }
    if (!user) {
      return res.status(404).json(info)
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        return next(loginError)
      } 

      return res.status(200).json({message: '로그인 성공'})
    })
  })(req, res, next)
})

router.get('/me', isLoggedIn, async (req, res, next) => {
  try {
    // req.user는 id만 담고 있음
    const found = await seller.findById(req.user)
    res.status(200).json(found)
  } catch(err) {
    next(err)
  }
})

router.get('/production-address', isLoggedIn, async (req, res, next) => {
  try {
    const result = await seller.findProductionAddresses(req.user)
    res.status(200).json(result)
  } catch(err) {
    next(err)
  }
})

router.post('/product/images', isLoggedIn, async (req, res, next) => {
  try {
    const form = new foormidable.IncomingForm({
      uploadDir: __dirname
    })

    form.parse(req, (_, fields, files) => {
      console.log('\n-----------')
      console.log('Fields', fields)
      console.log('Received:', Object.keys(files))
      console.log(files)
      console.log(fields.files)
      res.send('Thank you')
    })
  } catch(err) {
    console.error(err)
  }

  // res.status(200).json({message: '이미지 업로드 성공'})
})

module.exports = router