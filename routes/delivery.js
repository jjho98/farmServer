const express = require('express')
const router = express.Router()
const { productCrud } = require('../crud')

// /:category?index=x
router.get('/:category', async (req, res, next) => {
  try {
    const categoryList = await productCrud.findSomeDeliveryByCategory(req.params.category, req.query.index)
    res.status(200).json(categoryList)
  } catch(err) {
    next(err)
  }
})

router.get('/:category/:id', async (req, res, next) => {
  try {
    const selectedItem = await productCrud.findItemByPk(req.params.id)
    res.status(200).json(selectedItem)
  } catch(err) {
    next(err)
  }
})

module.exports = router