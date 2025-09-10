const express = require("express")
const app = express()
const produtos = require("./produtos.json")

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/Front/index.html")
})

app.get("/produtos", function(req,res)
{
    res.json(produtos)
})


app.get("/parametros/:nome/:cargo/:cor", function(req,res)
{
    res.send("Olá "+req.params.nome + " Seu cargo é "+ req.params.cargo + " Sua cor favorita é "+ req.params.cor)
})


app.listen(8081, function()
{
    console.log("Servidor rodando na porta 8081")
})
