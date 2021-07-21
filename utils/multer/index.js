const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file ,cb) => {
    cb(null,  __dirname)
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + file.originalname)
  }
})

module.exports = multer({storage})