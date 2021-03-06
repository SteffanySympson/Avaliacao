const mongoose = require('mongoose');
const FlipService = require('../service/service');

const flipService = new FlipService();

class FlipController{
    getAnuncio = async (req, res) => {
        const anuncios = await flipService.findAll();
        res.send(anuncios);
    }

    getAnuncioById = async (req, res) => {
        const id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send({message: 'ID inválido!!'});
            return;
        }

        const anuncio = await flipService.findById(id);

        if(!anuncio) {
            res.status(404).send({message:'Anuncio não encontrado!!'});
            return;
        }

        res.status(200).send(anuncio);
    }

    getAnuncioByBairro = async (req, res) => {
        const bairro = req.params.bairro;
        if(!mongoose.Types.Map.isValid(bairro)) {
            res.status(403).send({message: 'Bairro inválido!!'});
            return;
        }

        const anuncio = await flipService.findByBairro(bairro)

        if(!anuncio) {
            res.status(404).send({message:'Anuncio não encontrado!!'});
            return;
        }

        res.status(200).send(anuncio); 
    }

    createAnuncio = async (req, res) => {
        const anuncio = req.body;
        const anuncioSave = await flipService.createAnuncio(anuncio);
        res.send({message: `Anúncio ${anuncioSave.titulo} incluído com sucesso!`});
    }
    
    putAnuncio = async (req, res) => {
        const id = req.params.id;
        const anuncio = req.body;
        await flipService.putTarefa(id, tarefa)
        .then(() => {
      res.status(200).send({message: 'Anúncio atualizado com sucesso!!'});
    })
        .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

    delAnuncio = async (req, res) => {
        const id = req.params.id;
        await flipService.delAnuncio(id)
        .then(() => res.status(200).send({message: 'Anúncio excluido com sucesso!'}));
    }
}
module.exports = FlipController;