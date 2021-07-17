
const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
// const { isAuthenticated } = require('./middlewares')

const router = express.Router()

router.post('/login/customer', async (req, res, next) => {
  passport.authenticate('local', {session:  false}, (authError, user, info) => {
    if (authError) {
      return next(authError)
    }
    if (!user) {
      return res.status(404).json(info)
    }
    if (user.isSeller) {
      return res.status(403).json({message: '구매자 계정으로 로그인 해주세요'})
    }
    return req.login(user, {session:  false}, (loginError) => {
      if (loginError) {
        return next(loginError)
      } 
      const token = jwt.sign(
        { id: user.id, nickname: user.nickname, isSeller: user.isSeller }, 
        process.env.JWT_SECRET
      )
      return res.status(200).json({token})
    })
  })(req, res, next)
})

router.post('/login/seller', async (req, res, next) => {
  passport.authenticate('local', {session:  false}, (authError, user, info) => {
    if (authError) {
      return next(authError)
    }
    if (!user) {
      return res.status(404).json(info)
    }
    if (!user.isSeller) {
      return res.status(403).json({message: '판매자 계정으로 로그인 해주세요'})
    }
    return req.login(user, {session:  false}, (loginError) => {
      if (loginError) {
        return next(loginError)
      }
      const token = jwt.sign(
        { id: user.id, nickname: user.nickname, isSeller: user.isSeller }, 
        process.env.JWT_SECRET
      )
      return res.status(200).json({token})
    })
  })(req, res, next)
})

//  서버에 session이 없기 때문에 서버에서 로그아웃 불가
// router.post('/logout', isAuthenticated, (req, res, next) => {
//   try {
//     req.logout()
//     req.session.destroy()
//     res.status(200).json({message: '로그아웃 성공'})
//   } catch(err) {
//     next(err)
//   }
// })

router.get('/kakao', passport.authenticate('kakao'))

router.get('/kakao/callback', passport.authenticate('kakao', {
  successRedirect: '/',
  failureRedirect: '/'
}), (req, res) => {
  res.status(200).json({message: '카카오 로그인'})
})

module.exports = router