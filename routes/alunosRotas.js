const express = require("express");

const {
    addAluno,
    getAlunos,
    getAluno,
    setAluno,
    delAluno,
} = require("../controllers/alunosControllers");

const router = express.Router();
//Definindo os caminhos das rotas criadas e os métodos a serem aplicados
router.post("/aluno", addAluno); 
router.get("/alunos", getAlunos);
router.get("/aluno/:id", getAluno);
router.put("/aluno/:id", setAluno);
router.delete("/aluno/:id", delAluno);

module.exports = {
    routes: router,
}