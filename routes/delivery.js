const express = require('express')
const router = express.Router()
const { product } = require('../crud')

// /:category?offset=x
router.get('/:category', async (req, res, next) => {
  try {
    const categoryList = await product.findSomeDeliveryByCategory(req.params.category, req.query.offset)
    res.status(200).json(categoryList)
  } catch(err) {
    next(err)
  }
})

router.get('/:category/:id', async (req, res, next) => {
  try {
    const selectedItem = await product.findItemByPk(req.params.id)
    res.status(200).json(selectedItem)
  } catch(err) {
    next(err)
  }
})

module.exports = router