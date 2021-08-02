const passport = require("passport")
const { user } = require("../../crud")
const { Strategy: JwtStrategy , ExtractJwt} = require('passport-jwt')
const CreateError = require('http-errors')

options = {
  jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

// jwt verify callback
// module.exports = () => {
//   passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
//     const expDate = new Date(jwt_payload.exp)
//     if(expDate < new Date()) {
//       return done(CreateError(401, 'ExpiredToken'), false)
//     }
//     const user = jwt_payload
//     return done(null, user)
//   }))
// }