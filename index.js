const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const alunosRotas = require("./routes/alunosRotas");

const app = express(); 

app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json());

// rotas ligadas a tabela alunos
app.use("/api", alunosRotas.routes);

// uma rota raiz que responde por GET

app.listen(process.env.PORT, () => console.log("Servidor funcionando na porta 3003"));