// Reading assynchronous file


// Improving error message
const getBetteMessage = (error) => {
  if (error.code === 'ENOENT') return `Arquivo não encontrado: ${error.path}`

  return error.message;
}

const fs = require('fs');

fs.readFile('./example.txt', 'utf-8', (err, content) => {
  if (err) return console.error(`Erro ao ler arquivo: ${getBetteMessage(err)}`);

  console.log(`Conteúdo: ${content}`);
})

