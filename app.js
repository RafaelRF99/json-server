const express = require('express');
const rotaLivro = require('./routers/livro');

const app = express();

app.use(express.json());

app.use('/livros', rotaLivro); // Rota livros

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Escutando a porta ${"http://localhost:" + PORT}`);
});