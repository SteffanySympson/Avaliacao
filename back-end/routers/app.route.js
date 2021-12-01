const express = require('express');
const FlipController = require('../controller/controller');
const router = express.Router();
const flipController = new FlipController();

router.get('/', flipController.getAnuncio);

router.get('/:id', flipController.getAnuncioById);

router.get('/bairro/:bairro', flipController.getAnuncioByBairro);

router.post('/add', flipController.createAnuncio);

router.put('/:id', flipController.putAnuncio);

router.delete('/:id', flipController.delAnuncio);

module.exports = router;