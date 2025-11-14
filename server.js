const express = require("express")
const app = express()
const mongoose = require("mongoose")
const task = require("./schemas/task")
const cors = require("cors")


app.use(express.json())
app.use(cors())
require ("dotenv").config()

mongoose.connect(process.env.MONGO_KEY)

    .then(() => {
        console.log('Conectou ao banco!')
    
        app.listen(3000, () => {
            console.log("Servidor rodando no http://localhost:3000")})
        })

    .catch((err) => console.log(err))


app.post("/task", async (req, res) => {
    const {nome, done} = (req.body)
    const newTask ={nome, done}
    
    try{
        const tarefaCriada = await task.create(newTask)
        res.status(201).json(tarefaCriada);

    } 

    catch(error){
        res.status(500).json({ error: error.message });
    }
})

app.get("/tasks", async (req, res) =>{
    try{
        const tasks = await task.find()
        res.json(tasks)
    }
    catch(error)
    {
        res.send(error)
    }
})

app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const taskAtualizado = await task.findByIdAndUpdate(
      id,
      updates,
      { 
        new: true,
        runValidators: true 
      }
    );

    if (!taskAtualizado) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    res.status(200).json({
      message: "Tarefa atualizada com sucesso",
      produto: taskAtualizado
    });

  } catch (error) {
    console.error("Erro ao atualizar Tarefa:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    
    const taskDeletada = await task.findByIdAndDelete(id);

    
    if (!taskDeletada) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    
    res.status(200).json({ message: "Tarefa deletada com sucesso" });

  } catch (error) {
    
    console.error("Erro ao deletar Tarefa:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});
/*
    user + caiquebpa
    password + sa71bOrIZH5vuPbo

*/