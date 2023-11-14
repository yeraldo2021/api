"anuncio.controller.js";
const anuncio = require("../models/Mdatos");

async function filterController(req, res) {
  const filters = req.query;
  ("http://127.0.0.1:3000/anuncio/listar?sort=-price     sort=-price");
  console.log(filters);
  let response;
  if (filters.sort === "price") {
    response = await anuncio.find({}).sort({ precio: 1 });
    console.log(response);
  } else if (filters.sort === "-price") {
    //mayor a menor
    response = await anuncio.find({}).sort({ precio: -1 });
    console.log(response);
  } else if (filters.tags) {
    // tags: [ 'lifestyle', 'motor' ]
    // filters.tag ="motor"
    response = await anuncio.find({ tags: { $in: filters.tags } });
  }
  // else if (filters.max) { menores o iguales
  //   response = await anuncio.find({ precio: { $lte: Number(filters.max) } });
  // }
  else if (filters.max) {
    response = await anuncio.find({}).limit(Number(filters.max));
  } else if (filters.page) {
    const page = Number(filters.page);
    const limit = 2; // esto cambias para mostrar la cantidad de valores en la pagina
    const skip = (page - 1) * limit;

    response = await anuncio.find({}).skip(skip).limit(limit);
  } else if (filters.start && filters.limit) {
    const start = Number(filters.start - 1);
    const limit = Number(filters.limit);

    response = await anuncio.find({}).skip(start).limit(limit);
  } else {
    response = await anuncio.find({});
  }

  res.render("listar-anuncios", { anuncios: response, cont: 1 });
}

module.exports = {
  filterController,
};
