const { Customer } = require('../models')

exports.findById = async (id) => {
  const customer = await Customer.findByPk(id, {
    attributes: [
      'email', 
      'nickname',
      'provider',
      'profile'
    ],
  })
  return customer
}

exports.findByEmail = async (email) => {
  const customer = await Customer.findOne({ where: {email}})
  return customer
}

exports.findByNickname = async (nickname) => {
  const user = await User.findOne({ where: {nickname}})
  return user
}

exports.findKakaoUser = async (profile) => {
  const user = await User.findOne({
    where: {snsId: profile.id, provider: 'kakao'},
  })
  return user
}

exports.createKakaoUser = async (profile) => {
  const user = await User.create({
    email: profile._json && profile._json.kaccount_email,
    nickname: profile.displayName,
    snsId: profile.id,
    provider: 'kakao',
  })
  return user
}