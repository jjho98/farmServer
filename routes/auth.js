
const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { isAuthenticated, isNotLoggedIn, isLoggedIn } = require('./middlewares')
const { refreshToken, customerCrud } = require('../crud')
const router = express.Router()
const CreateError = require('http-errors')

const opt = { 
  // 배포 시에 RS256 사용
  // algorithm: 'RS256',
  expiresIn: '30m'
}

router.post('/login', async (req, res, next) => {
  passport.authenticate('localCustomer',  (authError, user, info) => {
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

      // try {
      //   // accessToken
      //   const accessToken = jwt.sign(
      //     { nickname: user.nickname, role: user.role }, 
      //     process.env.JWT_SECRET,
      //     opt
      //   )

      //   // refreshToken 만들어서 데이터베이스에 넣기
      //   const madeRefreshToken = await refreshToken.create(user.nickname)
      //   return res.status(200).json({accessToken, refreshToken: madeRefreshToken })
      // } catch(err) {
      //   next(err)
      // }
      return res.status(200).json({message: '로그인 성공'})
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





// cutomer 정보 제공
router.get('/me', isLoggedIn, async (req, res, next) => {
  try {
    const customer = await customerCrud.findById(req.user)
    res.status(200).json(customer)
  } catch(err) {
    next(err)
  }
})

// accessToken 사용 시간 만료 후 다시 토큰 요청
router.get('/token/refresh', isAuthenticated, async (req, res, next) => {
  const nickname = req.cookies.nickname
  const sentRefreshToken = req.cookies.refreshToken
  try {
    const foundRefreshToken = await refreshToken.find(nickname, sentRefreshToken)
    if (!foundRefreshToken) {
      return next(CreateError(401, 'InvalidRefresh'))
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

// refreshToken 삭제 요청
router.post('/token/reject', isAuthenticated, async (req, res, next) => {
  try {
    const nickname = req.cookies.nickname
    const sentRefreshToken = req.cookies.refreshToken
    const foundRefreshToken = await refreshToken.find(nickname, sentRefreshToken)
    if (foundRefreshToken) {
      await refreshToken.delete(foundRefreshToken)
    }
    res.status(200).json({message: '삭제 완료'})
  } catch(err) {
    next(err)
  }
})

module.exports = router