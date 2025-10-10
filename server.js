const express = require("express")
const app = express()
const mongoose = require("mongoose")
const produto = require("./schemas/produto")
const cors = require("cors")
require ("dotenv").config()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_KEY)

    .then(() => {
        console.log('Conectou ao banco!')
    
        app.listen(3000, () => {
            console.log("Servidor rodando no http://localhost:3000")})
        })

    .catch((err) => console.log(err))


app.post("/produto", async (req, res) => {
    const {nome, preco, categoria} = (req.body)
            const novoProduto ={
                nome,
                preco,
                categoria
            }
    
    try{
        await produto.create(novoProduto)
        console.log("Produto adicionado ao banco com sucesso")
    } 
    catch(error){
        res.send(error)
    }
})

app.get("/produtos", async (req, res) =>{
    try{
        const produtos = await produto.find()
        res.json(produtos)
    }
    catch(error)
    {
        res.send(error)
    }
})


app.get("/", function(req,res)
{
    res.send("teste")
})

/*
    user + caiquebpa
    password + gg0oJtxXUv94oQaJ

*/