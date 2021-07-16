const Product = require('../models/product')

exports.findSomeDeliveryByCategory = async (category, offset) => {
  const deliveryList = await Product.findAndCountAll({
    where: {
      category,
      isSelling: 1,
    },
    limit: 10,
    offset
  })
  return deliveryList
}

exports.findSomeDirectByCategory = async (category, offset) => {
  const directList = await Product.findAndCountAll({
    where: {
      canDirect: 1,
      isSelling: 1,
      category
    },
    limit: 10,
    offset
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

