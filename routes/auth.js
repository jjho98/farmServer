
const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { isAuthenticated } = require('./middlewares')
const { refreshToken, user } = require('../crud')
const router = express.Router()
const CreateError = require('http-errors')

const opt = { 
  algorithm: 'RS256',
  expiresIn: '30m'
}

router.post('/login/customer', async (req, res, next) => {
  passport.authenticate('local', {session:  false}, (authError, user, info) => {
    if (authError) {
      return next(authError)
    }
    if (!user) {
      return res.status(404).json(info)
    }
    if (user.role !== 'customer') {
      return res.status(403).json({message: '구매자 계정으로 로그인 해주세요'})
    }
    return req.login(user, {session:  false}, async (loginError) => {
      if (loginError) {
        return next(loginError)
      } 

      try {
        // accessToken
        const accessToken = jwt.sign(
          { nickname: user.nickname, role: user.role }, 
          process.env.JWT_SECRET,
          opt
        )

        // refreshToken 만들어서 데이터베이스에 넣기
        const madeRefreshToken = await refreshToken.create(user.nickname)
        return res.status(200).json({accessToken, madeRefreshToken })
      } catch(err) {
        next(err)
      }
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
    if (user.role !== 'seller') {
      return res.status(403).json({message: '판매자 계정으로 로그인 해주세요'})
    }
    return req.login(user, {session:  false}, async (loginError) => {
      if (loginError) {
        return next(loginError)
      }
      try {
        // accessToken
        const accessToken = jwt.sign(
          { nickname: user.nickname, role: user.role }, 
          process.env.JWT_SECRET,
          opt
        )

        // refreshToken 만들어서 데이터베이스에 넣기
        const madeRefreshToken = await refreshToken.create(user.nickname)
        return res.status(200).json({accessToken, madeRefreshToken })
      } catch(err) {
        next(err)
      }
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

// 닉네임, 판매자인지 정보 제공
router.get('/me', isAuthenticated, async (req, res, next) => {

})

// accessToken 사용 시간 만료 후 다시 토큰 요청
router.get('/token', isAuthenticated, async (req, res, next) => {
  const nickname = req.body.nickname
  const sentRefreshToken = req.body.refreshToken
  try {
    const foundRefreshToken = await refreshToken.find(nickname, sentRefreshToken)
    if (!foundRefreshToken) {
      return next(CreateError(401, '유효한 토큰이 아닙니다'))
    }
    const user = await user.findByNickname(nickname)
    const accessToken = jwt.sign(
      { nickname: user.nickname, role: user.role }, 
      process.env.JWT_SECRET,
      opt
    )
    res.status(200).json({accessToken})
  } catch(err) {
    next(err)
  }
})

// refreshTOken 삭제 요청
router.post('/token/reject', isAuthenticated, async (req, res, next) => {
  try {
    const nickname = req.body.nickname
    const sentRefreshToken = req.body.refreshToken
    const foundRefreshToken = await refreshToken.find(nickname, sentRefreshToken)
    if (foundRefreshToken) {
      await refreshToken.delete(foundRefreshToken)
    }
    res.status(200).json({message: '삭제 완료'})
  } catch(err) {
    console.error(err)
  }
  
})

module.exports = router