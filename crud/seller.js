const { Seller } = require('../models')

exports.findById = async (id) => {
  const user = await Seller.findByPk(id, 
    {
      attributes: [
        'email', 
        'nickname',
        'provider',
        'profile'
      ],
    }
  )
  return user
}

exports.findByEmail = async (email) => {
  const user = await Seller.findOne({ where: {email} })
  return user
}

// exports.findByNickname = async (nickname) => {
//   const user = await User.findOne({ where: {nickname}})
//   return user
// }

// exports.findKakaoUser = async (profile) => {
//   const user = await User.findOne({
//     where: {snsId: profile.id, provider: 'kakao'},
//   })
//   return user
// }

// exports.createKakaoUser = async (profile) => {
//   const user = await User.create({
//     email: profile._json && profile._json.kaccount_email,
//     nickname: profile.displayName,
//     snsId: profile.id,
//     provider: 'kakao',
//   })
//   return user
// }