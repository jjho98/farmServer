const passport = require('passport')
const kakaoStrategy = require('passport-kakao').Strategy
const {customerCrud} = require('../../crud')

module.exports = () => {
  passport.use(new kakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/auth/kakao/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const exUser = await customerCrud.findKakaoUser(profile)
      if (exUser) {
        done(null, exUser)
      } else {
        const newUser = await customerCrud.createKakaoUser(profile)
        done(null, newUser)
      }
    }
    catch(err) {
      console.error(err)
      done(err)
    }
  }))
} 