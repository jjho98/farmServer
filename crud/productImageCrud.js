const { ProductImage } = require('../models')

exports.bulkCreate = async (files) => {
  const result =  await ProductImage.bulkCreate(files)
  return result
}