//arquivo que vai armazenar as rotas admin
const express = require("express");
//a linha abaixo é necessaria para instanciar o objeto Router() na variavel router
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Produtos");
const {eCadastrado} = require("../helpers/eCadastrado")
const Produto = mongoose.model("produto");

router.get("/", eCadastrado,  (req, res) => {

});



router.post("/novo", eCadastrado,  (req, res) => {


});


router.get("/edit/:id", eCadastrado,  (req, res) => { d


});


router.post('/edit', eCadastrado,  (req, res)=>{

})


router.get("/delete/:id",  eCadastrado,  (req, res) => {


});


module.exports = router;