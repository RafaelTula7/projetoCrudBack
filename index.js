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

// Rota raiz que responde por GET, unica que está funcionando no domínio da vercel
app.get("/", (req, res) => {
    console.log("Rota raiz");
    res.send("Acesso a raiz da API");
}  );

app.listen(process.env.PORT, () => console.log("Servidor funcionando na porta 3003"));