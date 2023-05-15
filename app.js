const express = require('express'); // Importação do express.
const rotaLivro = require('./routers/livro'); // Importação das Rotas Livro.

const app = express(); // Habilitando express.

app.use(express.json()); // Habilitando leitura do JSON.

app.use('/livros', rotaLivro); // Rota livros

const PORT = 3001; // Definição da Porta.

app.listen(PORT, () => {
    console.log(`Escutando a porta ${"http://localhost:" + PORT}`); // Mensagem se carregar corretamente.
});