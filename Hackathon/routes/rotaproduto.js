//arquivo que vai armazenar as rotas admin
const express = require("express");
//a linha abaixo é necessaria para instanciar o objeto Router() na variavel router
const router = express.Router();
const mongoose = require("mongoose");
const filehelper = require('../helpers/file-helper')
const multer =require('../config/multer')
let nomeArquivo= [];

require("../models/Produtos");
const { eCadastrado } = require("../helpers/eCadastrado")
const Produto = mongoose.model("produto");

router.get("/", eCadastrado, (req, res) => {
    Produto.find({vendedor: req.user.id})
    .then(produtos=>{


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

    if (nomeArquivo)
        console.log(nomeArquivo)

});



router.post("/novo", eCadastrado, (req, res) => {

    var Itens = () => {
        var arrayItens = [];
        var nomeCor = req.body.cor
        var tamanho = req.body.tamanho
        var estoque = req.body.estoque
        var preco = req.body.preco
        let i
        if (Array.isArray(nomeCor) && Array.isArray(tamanho) && Array.isArray(estoque) && Array.isArray(preco)) {
            for (i in nomeCor)
                arrayItens.push({ cor: nomeCor[i], tamanho: tamanho[i], estoque: estoque[i], preco: preco[i] })
        } else {
            arrayItens.push({ cor: nomeCor, tamanho: tamanho, estoque: estoque, preco: preco })
        }
        return arrayItens
    }

    const novoProduto = {
        vendedor: req.user.id,
        nome_produto: req.body.nome_produto,
        categoria: req.body.categoria,
        descricao: Itens(),
        image: nomeArquivo,
    }
    itens=[]
    console.log(novoProduto)
    new Produto(novoProduto)
        .save()
        .then(novoproduto => {
            req.flash('success_msg', 'Produto cadastrado com sucesso!');
            res.redirect('/produtos');
        })

});

router.post('/novo/imagem', multer.single('image'), (req, res, next) => {
try{
    if (req.file) {

            filehelper.compressImage(req.file, 100).then(name => {
            req.flash('success_msg', 'imagem cadastrada com sucesso!');
            nomeArquivo.push(name)

            res.redirect('/produtos/add');
         })
            .catch(err => console.log(err) );
    }else{
        req.flash('error_msg', 'Formato Invalido!');

        res.redirect('/produtos/add');
    }
}catch(err){
    console.log(err)
}
});

router.get("/detalhes/:id", eCadastrado, (req, res) => {

    Produto.find({_id: req.params.id})
    .then(produtos=>{
        res.render("cadastros/detalhe_produto", {produtos: produtos});
    })
    .catch(err=>{
        req.flash("error_msg",
        "Erro ao listar Produtos!")
        res.redirect("/");
    })
});


router.post('/edit', eCadastrado, (req, res) => {

})


router.get("/delete/:id", eCadastrado, (req, res) => {


});


module.exports = router;