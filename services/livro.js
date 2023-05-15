const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('db.json'));
}

function getLivroId(id) {
    const livros = JSON.parse(fs.readFileSync('db.json'));

    const livroFiltrado = livros.filter(livro => livro.id === id);
    return livroFiltrado;
}

function insereLivro (livroNovo) {
    const livros = JSON.parse(fs.readFileSync('db.json'));
    const novaListaLivros = [...livros, livroNovo];
    fs.writeFileSync('db.json', JSON.stringify(novaListaLivros));
    return novaListaLivros
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('db.json'));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync('db.json', JSON.stringify(livrosAtuais));
}

function deletarLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('db.json'));
    const livrosModificado = livrosAtuais.filter(livro => livro.id !== id);

    fs.writeFileSync('db.json', JSON.stringify(livrosModificado));
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    modificaLivro,
    deletarLivro
}