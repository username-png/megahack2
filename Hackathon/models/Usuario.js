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
        required:false
    },

    numero: {
        type:String,
        required:false
    },

    bairro: {
        type:String,
        required:false
    },

    cidade: {
        type:String,
        required:false
    },

    uf: {
        type:String,
        required:false
    },

    cep: {
        type:String,
        required:false
    },
    eadmin: {
        type: Number,
        default: 0
    },
    ecliente: {
        type: Number,
         default: 0
    },
    evendedor: {
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
