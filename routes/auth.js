
const express = require('express')
const passport = require('passport')
const { isNotLoggedIn, isLoggedIn } = require('./middlewares')

const router = express.Router()

router.post('/login/customer', isNotLoggedIn, async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(authError)
    }
    if (!user) {
      return res.status(404).json(user)
    }
    if (user.isSeller) {
      return res.status(403).json({message: '구매자 계정으로 로그인 해주세요'})
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        return next(loginError)
      }
      return res.status(200).json({message: '로그인 성공'})
    })
  })(req, res, next)
})

router.post('/login/seller', isNotLoggedIn, async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(authError)
    }
    if (!user) {
      return res.status(404).json(user)
    }
    if (!user.isSeller) {
      return res.status(403).json({message: '판매자 계정으로 로그인 해주세요'})
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        return next(loginError)
      }
      return res.status(200).json({message: '로그인 성공'})
    })
  })(req, res, next)
})

router.post('/logout', isLoggedIn, (req, res, next) => {
  try {
    req.logout()
    req.session.destroy()
    res.status(200).json({message: '로그아웃 성공'})
  } catch(err) {
    next(err)
  }
})

router.get('/kakao', passport.authenticate('kakao'))

router.get('/kakao/callback', passport.authenticate('kakao', {
  successRedirect: '/',
  failureRedirect: '/'
}), (req, res) => {
  res.status(200).json({message: '카카오 로그인'})
})

module.exports = router