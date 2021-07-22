const {ProductionAddress} = require('../models')

exports.findBySellerId = async (Seller_id) => {
  return await ProductionAddress.findAll({
    where: {
      Seller_id
    }
  })
}