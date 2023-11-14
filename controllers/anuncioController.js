const Product = require('../models/Mdatos')

async function addProduct (req, res) {
    
  try {
    const {
      nombre,
      venta,
      precio,
      tags
    } = req.body

    const product = Product({
      nombre,
      venta,
      precio,
      tags
    })

    if (req.file) {
        
      const { filename } = req.file
      product.setImgUrl(filename)
   
    }

    const productStored = await product.save()
  
 //   res.status(201).send({ productStored })
      res.redirect('/anuncio/listar');
      
  } catch (e) {
    res.status(500).send({ message: e.message })
    
  }
  
}

async function getProducts (req, res) {
  const products = await Product.find().lean().exec()
  res.status(200).send({ products })
 
}

module.exports = {
  addProduct,
  getProducts
}