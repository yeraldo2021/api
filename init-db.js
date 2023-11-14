'use strict'

const connection = require('./lib/connectMongoose');
const modelodatos = require('./models/Mdatos');
const anunciosData = require('./anuncios.json');

main().catch(err => console.log('Hubo un error', err));

async function main() {

    // inicializar la coleccion de agentes
    await initAgentes();

    connection.close();
}

async function initAgentes() {
    // borrar todos los documentos de la coleccion de agentes
    const deleted = await modelodatos.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} agentes.`);
    // crear agentes iniciales
    const inserted = await modelodatos.insertMany(anunciosData.anuncios);
    console.log(`Creados ${inserted.length} agentes.`);
}