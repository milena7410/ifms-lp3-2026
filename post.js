
// importa o express
const express = require("express");

// cria a aplicação
const app = express();
app.use(express.json());

app.post("/filmes", (req, res) => {
  const novoFilme = req.body;

  filmes.push(novoFilme);

  res.json({
    mensagem: "Filme adicionado!",
    filme: novoFilme
  });

});


// porta do servidor
const PORTA = 3004;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});