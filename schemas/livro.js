const mongoose = require("mongoose")

const livroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    valor: Number
})

module.exports = mongoose.model("livros", livroSchema)