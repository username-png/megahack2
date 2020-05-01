const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Categoria = new Schema({

    nome:{
        type:String,
    },

    descricao:{
        type:String,
    },

});


mongoose.model("categoria", Categoria);

