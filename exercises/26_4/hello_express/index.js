const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.send("Hello world");
  const date = new Date;
  res.send({ date });
});

app.get('/api', (req, res) => {
  res.send({ name: 'Vinicius' });
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/tests')
  .get(function (req, res) {
    res.send('tests with get request');
  })
  .post(function (req, res) {
    res.send('tests with post request');
  });

app.listen(3000);