const express = require("express")
const app = express()
const mongoose = require("mongoose")
const produto = require("./schemas/produto")

app.use(express.json())

mongoose.connect("mongodb+srv://caiquebpa:wotAmqQAA3GCmz9y@cluster0.yhtdz1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    .then(() => {
        console.log('Conectou ao banco!')
    
        app.listen(3000, () => {
            console.log("Servidor rodando no http://localhost:3000")})
        })

    .catch((err) => console.log(err))


app.post("/produtos", async (req, res) => {
    try{
        const novoProduto = await produto.create(req.body)
        res.json(novoProduto)
    } 
    catch(error){
        res.send(error)
    }
})

app.get("/produtos", async (req, res) =>{
    try{
        const produtos = await produto.find
        res.json(produtos)
    }
    catch(error)
    {
        res.send(error)
    }
})


app.get("/", function(req,res)
{
    res.send("Teste API Estagio")
})

/*
    user + caiquebpa
    password + wotAmqQAA3GCmz9y

*/