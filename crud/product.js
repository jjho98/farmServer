const Product = require('../models/product')

exports.findAllByCategory = async (category) => {
  const deliveryList = await Product.findAndCountAll({
    where: {
      category,
      isSelling: 1,
    },
    limit: 10,
  })
  return deliveryList
}

exports.findAllDirectByCategory = async (category) => {
  const directList = await Product.findAndCountAll({
    where: {
      canDirect: 1,
      isSelling: 1,
      category
    },
    limit: 10,
  })
  return directList
}

exports.findItemByPk = async(id) => {
  const item = await Product.findByPk(id)
  return item
}

