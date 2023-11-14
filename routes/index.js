var express = require("express");
var router = express.Router();
const anuncio = require("../models/Mdatos");
var upload = require("../lib/storage");
const { addProduct, getProducts } = require("../controllers/anuncioController");
const Mdatos = require("../models/Mdatos");
const { filterController } = require("../controllers/filter.controller");

console.log("here route!");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodePop' });
 
});

router.get("/listar", filterController);

router.get("/ingresar", function (req, res, next) {
  res.render("ingresar-anuncio");
});

router.get("/ingresar", getProducts, async (req, res, next) => {
  //perfect!
  res.render("ingresar-anuncio");
});

router.post("/", upload.single("foto"), addProduct, async (req, res) => {
  try {
    const payload = req.body;
    const newAnuncio = new anuncio(payload);
    const response = await newAnuncio.save();
    res.redirect("/anuncio/listar");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
