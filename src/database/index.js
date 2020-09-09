const mongoose = require('mongoose');

//Criando uma conexão com o Mongo e definirmos uma forma de conectar com o mongo
mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;