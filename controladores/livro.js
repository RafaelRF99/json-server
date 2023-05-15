const { getTodosLivros, getLivroId, insereLivro, modificaLivro, deletarLivro } = require('../services/livro');
const fs = require('fs');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const livro = getLivroId(id);
            res.send(livro);
        } else {
            res.status(422).send("ID Incorreto!")
        }
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livro = req.body;
        if (req.body.nome) {
            insereLivro(livro);
            res.status(201).send("Livro cadastrado com sucesso!");
        } else {
            res.status(442).send("O campo nome é obrigatório!")
        }
        
    } catch (err) {
        res.status(500).send(err.msg);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const body = req.body;
            modificaLivro(body, id);
            res.status(201).send("Modificado!");
        } else {
            res.status(422).send("ID Incorreto!")
        }
    } catch (err) {
        res.status(500).send(err.msg);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deletarLivro(id);
            res.status(201).send("Livro Deletado!");
        } else {
            res.status(422).send("ID Incorreto!")
        }

    } catch (err) {
        res.status(500).send(err.msg);
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}