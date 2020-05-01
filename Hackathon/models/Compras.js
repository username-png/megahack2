const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Compras = new Schema({

    idproduto:{
        type: Schema.Types.ObjectId,
        ref:"produto", required:true},

    idcliente:{
            type: Schema.Types.ObjectId,
            ref:"usuarios", required:true},

    dataCompra:{
        type:Date,
    },
    previsao_entrega:{
        type:Number,
    },


});


mongoose.model("compra", Compras);
