const express = require('express')
const router = express.Router()
const { productCrud } = require('../crud')

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params)
    const product = await productCrud.getProductDetail(req.params.id)
    res.status(200).json(product)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router