const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Produto = new Schema({
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: "vendedor", required: true
    },
    // categoria: {
    //     type: Schema.Types.ObjectId,
    //     ref: "categoria", required: true
    // },
    categoria: {
        type: String,
    },
    nome_produto: {
        type: String,
    },
    descricao: [{
        preco: {
            type: Number
        },
        estoque: {
            type: Number,
        },
        cor: {
            type: String,
        },
        tamanho: {
            type: String,
        },
    }],
});


mongoose.model("produto", Produto);

