const local = require('./local')
const kakao = require('./kakao')
const jwt = require('./jwt')

module.exports = () => {
  local()
  kakao()
  jwt()
}