//arquivo que vai armazenar as rotas admin
const express = require("express");
//a linha abaixo é necessaria para instanciar o objeto Router() na variavel router
const router = express.Router();
const mongoose = require("mongoose");

require("../models/Produtos");
const { eCadastrado } = require("../helpers/eCadastrado")
const Produto = mongoose.model("produto");

router.get("/", eCadastrado, (req, res) => {
    Produto.find({vendedor: req.user.id})
    .then(produtos=>{

        console.log('aaa' + produtos)
        res.render("cadastros/produtos", {produtos: produtos});
    })
    .catch(err=>{
        req.flash("error_msg",
        "Erro ao listar Produtos!")
        res.redirect("/");
    })


});
router.get("/add", eCadastrado, (req, res) => {

    res.render('cadastros/addprodutos');

});



router.post("/novo", eCadastrado, (req, res) => {

    var Itens = () => {
        var arrayItens = [];
        var nomeCor = req.body.cor
        var tamanho = req.body.tamanho
        var estoque = req.body.estoque
        var preco = req.body.preco

        if (Array.isArray(nomeCor) && Array.isArray(tamanho) && Array.isArray(estoque) && Array.isArray(preco)) {
            for (let i in nomeCor)
                arrayItens.push({ cor: nomeCor[i], tamanho: tamanho[i], estoque: estoque[i], preco: preco[i] })
        } else {
            arrayItens.push({ cor: nomeCor[i], tamanho: tamanho[i], estoque: estoque[i], preco: preco[i] })
        }
        return arrayItens
    }

    const novoProduto = {
        vendedor: req.user.id,
        nome_produto: req.body.nome_produto,
        categoria: req.body.categoria,
        descricao: Itens(),
    }
    new Produto(novoProduto)
        .save()
        .then(novoproduto => {
            req.flash('success_msg', 'Produto cadastrado com sucesso!');
            res.redirect('/produtos');
        })

});


router.get("/edit/:id", eCadastrado, (req, res) => {
    d


});


router.post('/edit', eCadastrado, (req, res) => {

})


router.get("/delete/:id", eCadastrado, (req, res) => {


});


module.exports = router;