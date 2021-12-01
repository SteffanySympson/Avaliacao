const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const anunciosModel = new mongoose.Schema({
    uf: {type: 'String', required: true},
    cidade: {type: 'String', required: true},
    bairro: {type: 'String', required: true},
    tipo: {type: 'String', required: true},
    padrão: {type: 'String', required: true},
    intercepto: {type: 'Number', required: true},
    quartos: {type: 'Number', required: true},
    suites: {type: 'Number', required: true},
    vagas: {type: 'Number', required: true},
    area: {type: 'Number', required: true},
    area_poly_1: {type: 'Number', required: true},
    parea_poly_2: {type: 'Number', required: true}
})



const Anuncios = mongoose.model('anuncios', anunciosModel);

module.exports = Anuncios;