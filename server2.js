
// importa o express
const express = require("express");

// cria a aplicação
const app = express();


const alunos = [
  { id: 1, nome: "Ana", nota: 8 },
  { id: 2, nome: "Joao", nota: 6 },
  { id: 3, nome: "Milena", nota: 10 },
  { id: 4, nome: "Carlos", nota: 5 }
];
app.get("/alunos", (req, res) => {
  res.json(alunos);
});


app.get("/aluno/:nome", (req, res) => {
  const nome = req.params.nome;
  const aluno = alunos.find(a => a.nome === nome);

  if (aluno) {
    res.json(aluno);
  } else {
    res.send("Aluno não encontrado");
  }
});

const PORTA = 3001;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});


