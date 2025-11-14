const mongoose = require("mongoose")

const produtosSchema = new mongoose.Schema({
    nome: String,
    done: Boolean,
})

module.exports = mongoose.model("tasks", produtosSchema)