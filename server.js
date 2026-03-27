
// importa o express
const express = require("express");

// cria a aplicação
const app = express();

app.use((req, res, next) => {
    console.log("Acesso:", req.method, req.url);
    next();
});


// rota GET principal
app.get("/", (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/aluno/Milena">Ir para aluno</a><br>
        <a href="/status">Ir para status</a>
    `);sxsdsdasasdasd
});

    
// outra rota de exemplo
app.get("/aluno", (req, res) => {
    res.send("Rota do aluno funcionando");
});


    app.get("/aluno/:nome", (req, res) => {
        const nome = req.params.nome;
        res.send(`Ola, ${nome}!`);
    });

    app.get("/soma/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;

    res.send(`Resultado: ${resultado}`);
});

app.get("/status", (req, res) => {
    res.json({
        servidor: "online",
        disciplina: "LP3",
        professora: "Milena",
        hora: new Date().toLocaleString()
    });
});


// porta do servidor
const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});



 for (let i = 0; i < filmes.length; i++) {
    soma += filmes[i].nota;
  }