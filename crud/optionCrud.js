const { Option } = require('../models')

exports.bulkCreateOptions = async (options) => {
  const result =  await Option.bulkCreate(options)
  return result
}