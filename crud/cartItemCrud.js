const { CartItem, Option, Product } = require('../models')

exports.addToCart = async (Option_id, count, Customer_id) => {
  await CartItem.create({
    Option_id,
    Customer_id,
    count,
  })
}

exports.getCart = async (Customer_id) => {
  const result = await CartItem.findAll({
    where: {
      Customer_id,
    },
    attributes: [
      'count',
      'id',
    ],
    include: [
      {model: Option, as: 'Option', include: [
        {model: Product, as: 'Product', attributes: [
          'id',
          'name',
          'thumbnail',
          'canDirect',
          'isSelling',
        ]}
      ]}
    ]
  })
  return result
}