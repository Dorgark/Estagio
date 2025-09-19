const mongoose = require("mongoose")

const produtosSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    categoria: String,
})

module.exports = mongoose.model("produtos", produtosSchema)