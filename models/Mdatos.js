const mongoose = require('mongoose');



//se define el esquema del anuncio

const anuncioSchema = mongoose.Schema({
    nombre: { type: String, index: true },
    venta: { type: Boolean, index: true  },
    precio: { type: Number, index: true },
    foto: { type: String, index: true},
    tags: {  type: [String], index: true  }
   
},{

});
anuncioSchema.methods.setImgUrl = function setImgUrl (filename) {
  
    this.foto = `http://localhost:${3000}/public/${filename}`
    
  }

anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields){
    const query = Mdatos.find(filtro); // devuelve un objeto de tipo query que es un thenable
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
}


// crear el modelo del anuncio

const Mdatos = mongoose.model('anuncio', anuncioSchema);

// exportar el modelo de agente (opcional)

module.exports = Mdatos;

anuncioSchema.statics.list = async function(filters, startRow, numRows, sortField, includeTotal, cb) {
};

module.exports = Mdatos;