var express = require('express');
var router = express.Router();
var modelschema = require('../../models/Mdatos')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try{
      // filtros
      // http://127.0.0.1:3000/api?nombre=Moto%20Electrica
      const filterByName = req.query.nombre;


      const filterByAge = req.query.age; //http://127.0.0.1:3000/api/agentes?age=34
      // paginacion
      const skip = req.query.skip; //http://127.0.0.1:3000/api/agentes?skip=2
      const limit = req.query.limit; //http://127.0.0.1:3000/api/agentes?skip=2&limit=2
      // ordenacion
      const sort = req.query.sort; //http://127.0.0.1:3000/api/agentes?sort=name
                                  //http://127.0.0.1:3000/api/agentes?sort=-name
                                  //http://127.0.0.1:3000/api/agentes?sort=-age%20name
      // field selection
      const fields = req.query.fields; //http://127.0.0.1:3000/api/agentes?fields=name
                                      //http://127.0.0.1:3000/api/agentes?fields=name%20-_id%20address

      const filtro = {};

      if (filterByName) {
          filtro.nombre = filterByName;
      }

      if (filterByAge) {
          filtro.age = filterByAge;
      }

      const anuncios = await modelschema.lista(filtro, skip, limit, sort, fields);
      
     // throw new Error('fallo forzado')

      res.json({ results: anuncios})

  } catch (err) {
      next(err);
  }
});

module.exports = router;