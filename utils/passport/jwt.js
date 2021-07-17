const passport = require("passport")
const User = require("../../models/User")
const { Strategy: JwtStrategy , ExtractJwt} = require('passport-jwt')

options = {
  jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

module.exports = () => {
  passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const exUser = await User.findOne({
        id: jwt_payload.id, 
      })
      if(!exUser) {
        return done(null, false)
      }
    } catch(err) {
      return done(err, false)
    }
    return done(null, exUser)
  }))
}