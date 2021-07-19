const { RefreshToken } = require('../models')
const randToken = require('rand-token')

exports.create = async (nickname) => {
  const refreshToken = randToken.uid(256)
  const token = await RefreshToken.create({
    nickname,
    token: refreshToken
  })
  return token.token
}

exports.find = async (nickname, token) => {
  const found = await RefreshToken.findOne({
    where: {
      nickname,
      token
    },
  })
  return found
}

exports.delete = async (foundToken) => {
  await foundToken.destroy()
}