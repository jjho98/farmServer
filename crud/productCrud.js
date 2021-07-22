const { Product } = require('../models')

exports.findSomeDeliveryByCategory = async (category, index) => {
  const deliveryList = await Product.findAndCountAll({
    where: {
      category,
      isSelling: 1,
    },
    limit: 10,
    offset: index * 10
  })
  return deliveryList
}

exports.findSomeDirectByCategory = async (category, index) => {
  const directList = await Product.findAndCountAll({
    where: {
      canDirect: 1,
      isSelling: 1,
      category
    },
    limit: 10,
    offset: index * 10
  })
  return directList
}

exports.findItemByPk = async(id) => {
  const item = await Product.findByPk(id, {
    include: [
      
    ]
  })
  return item
}

exports.createProduct = async (product) => {
  const item = await Product.create(product)
  return item
}

