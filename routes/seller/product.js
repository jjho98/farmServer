const express = require('express')
const router = express.Router()
const { isNotLoggedIn, isLoggedIn } = require('../middlewares')
const { productCrud, optionCrud, productImageCrud } = require('../../crud')
const upload = require('../../utils/multer')

// router.post('/images', isLoggedIn, (req, res, next) => {
//   try {
//     const form = new foormidable.IncomingForm({
//       uploadDir: 'public/images',
//       keepExtensions: true,
//     })

//     const uploaded = []

//     form.parse(req)
//     .on('file', (name, file) => {
//       const path = file.path.split('\\')
//       console.log('이미지 파일 하나 업로드')
//       uploaded.push({
//         img: path[path.length - 1],
//         // 이걸 어떻게 받지?
//         Product_id: 33
//       })
//     })
//     .once('end', () => {
//       // 제품 이미지 데이터베이스에 저장


//       res.status(200).json({message: '이미지 업로드 성공'})
//     })

//   } catch(err) {
//     console.error(err)
//   }

//   // res.status(200).json({message: '이미지 업로드 성공'})
// })

// 이미지 최대
router.post('/', isLoggedIn, upload.array('files', 10) ,async (req, res, next) => {
  try {
    // console.log(req.body)
    const product = req.body
    const options = JSON.parse(req.body.options)
    // console.log(JSON.parse(options))
    if (options.length > 1) {
      product['hasOneOption'] = 0
    }
    product['Seller_id'] = req.user

    // option들 가격 중 가장 낮은 가격을 보여주는 가격으로 설정
    optionsPrice = options.map((option) => option.price)
    product['displayPrice'] = Math.min(optionsPrice)

    product['canDirect'] = product.canDirect ? 1 : 0

    // console.log(req.files)
    product['thumbnail'] =  req.files[0].filename

    // product 데이터베이스에 생성
    const madeProduct = await productCrud.createProduct(product)


    // option 데이터베이스에 생성
    options.forEach((option) => {
      option['Product_id'] = madeProduct.id
    })
    const madeOptions = await optionCrud.bulkCreateOptions(options)

    // produt image 데이터베이스에 생성
    const files = req.files.map(file => { 
      return {
        img: file.filename,
        Product_id: madeProduct.id
      }
    })
    console.log(files)
    const madeImages = await productImageCrud.bulkCreate(files)

    return res.status(200).json({message: 'product 생성 성공'})
  } catch(err) {
    console.error(err)
  }
})


module.exports = router