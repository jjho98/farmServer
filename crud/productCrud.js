const { Product, Option, ProductImage } = require('../models')

// create
exports.createProduct = async (product) => {
  const item = await Product.create(product)
  return item
}


// read
exports.findSomeDeliveryByCategory = async (category, index, filter, orderWay) => {
  console.log(filter)
  const deliveryList = await Product.findAndCountAll({
    where: {
      category,
      deletedAt: null,
      isSelling: 1,
    },
    order: [
      [filter, orderWay]
    ],
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

exports.getProductDetail = async(id) => {
  const item = await Product.findByPk(id, {
    include: [
      {model: Option, as: 'Options'},
      {model: ProductImage, as: 'ProductImages'},
    ],
  })
  return item
} 