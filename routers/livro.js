const { Router } = require('express');
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro');
const fs = require('fs'); // FileSystem > Manipula arquivos do JS. | Ler e inserir dados.

const livros = Router();

livros.get('/', getLivros);

livros.get('/:id', getLivro);

livros.post('/', postLivro);

livros.patch('/:id', patchLivro);

livros.delete('/:id', deleteLivro);

module.exports = livros;