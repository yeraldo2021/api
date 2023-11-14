const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/mac/Desktop/Proyecto NodeJs/NodePop/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.png`)
  }
})

const upload = multer({ storage })

module.exports = upload