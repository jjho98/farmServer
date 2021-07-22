const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const {seller} = require('../../crud')

module.exports = () => {
  passport.use('localSeller', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const exUser = await seller.findByEmail(email)
      if (exUser) {
        const result = exUser.password === password
        // this is real!!!!!
        // const result = await bcrypt.compare(password, exUser.password)
        delete exUser.passwordr
        if (result) {
          return done(null, exUser)
        } else {
          return done(null, false, { message: '비밀번호가 일치하지 않습니다.' })
        }
      } else {
        return done(null, false, { message: '가입되지 않은 이메일입니다.'})
      }
    } catch(err) {
      console.error(err)
      return done(err)
    }
  }))
}