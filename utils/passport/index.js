const passport = require('passport')
const local = require('./local')
const kakao = require('./kakao')
const jwt = require('./jwt')

module.exports = () => {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    done(null, id);
  });
  
  local()
  kakao()
  // jwt()
}