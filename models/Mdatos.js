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

anuncioSchema.statics.lista = function( skip, limit, sort){
   
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
  
    return query.exec();
}


// crear el modelo del anuncio

const Mdatos = mongoose.model('anuncio', anuncioSchema);

// exportar el modelo de agente (opcional)





module.exports = Mdatos;