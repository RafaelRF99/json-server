const { Router } = require('express');
const { getLivros } = require('../controladores/livro');
const fs = require('fs'); // FileSystem > Manipula arquivos do JS. | Ler e inserir dados.

const livros = Router();

livros.get('/', getLivros);

livros.post('/', (req, res) => {
    const dadosAtuais = JSON.parse(fs.readFileSync('db.json')); 
    // readFileSync: Ler o arquivo. | JSON.parse: Transforma em JSON.

    const novoDado = req.body; // Pega os parâmetros enviados
    fs.writeFileSync('db.json', JSON.stringify([...dadosAtuais, novoDado]));
    // writeFileSync: Escrever arquivo. | JSON.stringify: Volta em JSON.

    res.status(200).send("Livro cadastrado com sucesso!");
});

livros.patch('/', (req, res) => {
    res.status(200).send("Você fez uma requisição do tipo PATCH!");
});

livros.delete('/', (req, res) => {
    res.status(200).send("Você fez uma requisição do tipo DELETE!");
});

module.exports = livros;