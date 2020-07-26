let dados = {
  nome: 'Vinicius',
  idade: 23,
}

dados.altura = 1.77;



for (let i in dados) {
  console.log(i, dados[i]);
}