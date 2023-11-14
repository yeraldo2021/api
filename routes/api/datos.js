var express = require('express');
var router = express.Router();
var modelschema = require('../../models/Mdatos')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try{
      // paginacion
      const skip = req.query.skip; 
      const limit = req.query.limit; 
      // ordenacion
      const sort = req.query.sort;                                                     

      const anuncios = await modelschema.lista(skip, limit, sort);
      res.json({ results: anuncios})

  } catch (err) {
      next(err);
  }
});

module.exports = router;