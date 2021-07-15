const express = require('express')
const router = express.Router()
const { product } = require('../crud')

router.get('/:category', async (req, res) => {
  const categoryList = await product.findAllByCateogry(req.params.category)
  res.status(200).json(categoryList)
})

router.get('/:category/:id', async (req, res) => {
  const selectedItem = await product.findItemByPk(req.params.id)
  res.status(200).json(selectedItem)
})

module.exports = router