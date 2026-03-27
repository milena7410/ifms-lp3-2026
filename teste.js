const express = require("express");
const app = express();
 app.use(express.json());


const filmes = [
  { id: 1, titulo: "A Origem", ano: 2010, nota: 10 },
  { id: 2, titulo: "A Familia do Futuro", ano: 2007, nota: 9 },
  { id: 3, titulo: "Homem-Aranha", ano: 2002, nota: 8 },
  { id: 4, titulo: "Interestelar", ano: 2014, nota: 10 },
  { id: 5, titulo: "Click", ano: 2006, nota: 9 }
];

// listar todos
app.get("/filmes", (req, res) => {
  res.json(filmes);
});

// buscar por id
app.get("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find(f => f.id === id);

  if (filme) {
    res.json(filme);
  } else {
    res.send("Filme não encontrado");
  }
});

// bem avaliados
app.get("/filmes/bem-avaliados", (req, res) => {
  const lista = filmes.filter(f => f.nota >= 9);
  res.json(lista);
});



// por ano
app.get("/filmes/ano/:ano", (req, res) => {
  const ano = parseInt(req.params.ano);
  const lista = filmes.filter(f => f.ano === ano);

  res.json(lista);
});

//post
app.post("/filmes", (req, res) => {
  const novoFilme = req.body;
  filmes.push(novoFilme);

  res.json({
    mensagem: "Filme adicionado!",
    filme: novoFilme
  });
});




const musicas = [
  { id: 1, titulo: "Dark Red", artista: "Steve Lacy", nota: 10 },
  { id: 2, titulo: "Instant Crush", artista: "Daft Punk", nota: 9 },
  { id: 3, titulo: "Chop Suey!", artista: "System of a Down", nota: 8 },
  { id: 4, titulo: "Backstage", artista: "Matuê", nota: 7 }
];

// listar todas
app.get("/musicas", (req, res) => {
  res.json(musicas);
});

// buscar por id
app.get("/musicas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const musica = musicas.find(m => m.id === id);

  if (musica) {
    res.json(musica);
  } else {
    res.send("Música não encontrada");
  }
});

// por artista
app.get("/musicas/artista/:nome", (req, res) => {
  const nome = req.params.nome;
  const lista = musicas.filter(m => m.artista === nome);

  res.json(lista);
});

// top
app.get("/musicas/top", (req, res) => {
  const lista = musicas.filter(m => m.nota >= 9);
  res.json(lista);
});


const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 150 },
  { id: 4, nome: "Monitor", preco: 1200 }
];

// listar
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

// buscar por id
app.get("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.send("Produto não encontrado");
  }
});

// caros
app.get("/produtos/caros", (req, res) => {
  const lista = produtos.filter(p => p.preco > 1000);
  res.json(lista);
});

// baratos
app.get("/produtos/baratos", (req, res) => {
  const lista = produtos.filter(p => p.preco < 200);
  res.json(lista);
});




const PORTA = 3001;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});


app.post("/filmes", (req, res) => {
  const { titulo, ano, nota } = req.body;

  const novoFilme = {
    id: filmes.length + 1,
    titulo,
    ano,
    nota
  };

  filmes.push(novoFilme);

  res.json(novoFilme);
});

