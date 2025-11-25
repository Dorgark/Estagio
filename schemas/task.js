const mongoose = require("mongoose")

const produtosSchema = new mongoose.Schema({
    name: String,
    done: Boolean,
})

module.exports = mongoose.model("tasks", produtosSchema)