var express = require('express');
var router = express.Router();
const anuncio = require('../models/Mdatos')
var upload = require('../lib/storage')
const { addProduct, getProducts } = require('../controllers/anuncioController');
const Mdatos = require('../models/Mdatos');
/* GET home page. */
// Esta es la primera ruta / y el app.js es la segunda ruta


router.get('/listar', async(req, res) => {
    const filters = req.query;
    let response
if (filters.precio) {
  'http://127.0.0.1:3000/anuncio/listar?precio=100'
   response = await anuncio.find({precio: Number(filters.precio)});
}else{
  response = await anuncio.find();
}
    

  
    res.render('listar-anuncios', { anuncios: response, cont: 1 });
  });

router.get('/ingresar', function(req, res, next) {
    res.render('ingresar-anuncio');
  });
  
router.get('/ingresar', getProducts, async(req, res, next) => {
    res.render('ingresar-anuncio');
  });

router.post('/', upload.single('foto'), addProduct, async(req, res) => {
    try {
      const payload = req.body;
      const newAnuncio = new anuncio(payload);
      const response = await newAnuncio.save();
      res.redirect('/anuncio/listar');
    } catch (error) {
      console.log(error)
    }
  });

module.exports = router;
