const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Usuario = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    endereco: {
        type:String,
        required:true
    },

    numero: {
        type:String,
        required:true
    },

    bairro: {
        type:String,
        required:true
    },

    cidade: {
        type:String,
        required:true
    },

    uf: {
        type:String,
        required:true
    },

    cep: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true
    },








    eadmin: {
        type: Number,
        default: 0
    },
    epagante: {
        type: Number,
        default: 0
    },
    erepresentante: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    },

});
//criando efetivamente, e passando o nome categorias
mongoose.model("usuarios", Usuario);
