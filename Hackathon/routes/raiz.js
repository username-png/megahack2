const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Produtos");
const { eCadastrado } = require("../helpers/eCadastrado")
const Produto = mongoose.model("produto");

//rota principal

router.get('/',(req,res)=>{

    Produto.find({})
    .then(produtos=>{
        res.render("index", {produtos: produtos});
    })
    .catch(err=>{
        req.flash("error_msg",
        "Erro ao listar Produtos!")
        res.redirect("/");
    })

})


module.exports= router