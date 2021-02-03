// uma forma mais rápida, porém menos customizada
const fs = require('fs');
const util = require('util');

// Escrever algo em um arquivo
fs.writeFile('./example.txt', 'My other text', { flag: 'w' }, (err) => {
  if (err) throw err;
  console.log('Arquivo salvo.')
});

// -- Ler arquivos e promissificar uma função, que neste caso, é de leitura. Mas poderia ser qualquer outra.
const readFilePromise = util.promisify(fs.readFile);

readFilePromise('./example.txt', 'utf-8')
  .then((content) => console.log(content))
  .catch((err) => {
    if (err.code === 'ENOENT') console.log(`Erro ao ler arquivo: ${err.path}`);
    console.log(err);
  })






/*
    Flag =>
      w: write
      x: exclusive
  */