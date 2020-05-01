const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Produto = new Schema({
    vendedor:{
        type: Schema.Types.ObjectId,
        ref:"vendedor", required:true},

    categoria:{
        type: Schema.Types.ObjectId,
        ref:"categoria", required:true},

    nome:{
        type:String,
    },
    descricao:{
        type:String,
    },
    qtd_estoque:{
        type:Number,
    },
    preco:{
        type:Number,
    },



});


mongoose.model("produto", Produto);

