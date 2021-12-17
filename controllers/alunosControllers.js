const firebase = require("firebase");
const config = require("../config"); 

const app = firebase.initializeApp(config.firebaseConfig);
const db = firebase.firestore(app); 

const addAluno = async (req, res) => {
    try {
        const data = req.body;
        await db.collection("alunos").doc().set(data);
        res.send("Dados Registrados");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAlunos = async (req, res) => {
    try {
        const alunos = await db.collection("alunos").get();
        const dataResp = [];
        if (alunos.empty) {
            res.status(404).send("Nenhum dado encontrado");
        } else {
            alunos.forEach( (doc) => {
                dataResp.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    email: doc.data().email,
                })
            } )
            res.send(dataResp);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}


const getAluno = async (req, res) => {
    try {
        const id = req.params.id;
        const pessoa = await db.collection("alunos").doc(id).get();
        if (!pessoa.exists) {
            res.status(404).send("Nenhum registro encontrado com este código" + id);
        } else {
            res.send(pessoa.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const setAluno = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const aluno = await db.collection("alunos").doc(id);
        await aluno.update(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const delAluno = async (req, res) => {
    try {
        const id = req.params.id;
        const aluno = await db.collection("alunos").doc(id).delete();
        res.status(200).send("Registro excluído");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addAluno,
    getAlunos,
    getAluno,
    setAluno,
    delAluno,
}




