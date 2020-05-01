const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Vendedor = new Schema({

    nome:{
        type:String,
    },

    cpf:{
        type:String,
    },
    endereco:{
        type:String,
    },

});


mongoose.model("vendedor", Vendedor);

