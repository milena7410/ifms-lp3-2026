const fs = require('fs');

try {
    const conteudo = fs.readFileSync('mensagem.txt', 'utf-8');
    console.log("Arquivo lido com sucesso!");
    console.log(conteudo);
} catch (erro) {
    console.log("Ops! Deu ruim ao ler o arquivo");
    console.log("Motivo:", erro.message);
}