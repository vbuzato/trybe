const fs = require('fs');

function readFilePromise(fileName) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
      if (err) return reject(`Erro ao ler arquivo: ${err.path}`);

      resolve(content)
    })
  })

  return promise;
}

readFilePromise('./example.txt')
  .then((content) => console.log(content))
  .catch((err) => console.log(err))