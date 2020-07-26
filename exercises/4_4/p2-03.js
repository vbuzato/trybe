// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

function indiceMaiorNumero(lista) {
  let menor = lista[0];
  for (i of lista) {
    if (menor > i) {
      menor = i;
    }
  }
  return lista.indexOf(menor, 0)
}

let list = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMaiorNumero(list));