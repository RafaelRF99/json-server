const todosLivros = require('../db.json')

function getLivros(req, res) {
    try {
        res.status(200).send(todosLivros);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = {
    getLivros
}