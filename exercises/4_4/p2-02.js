// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

function indiceMaiorNumero(lista) {
  let maior = lista[0];
  for (i of lista) {
    if (maior < i) {
      maior = i;
    }
  }
  return lista.indexOf(maior, 0)
}

let list = [2, 3, 6, 7, 10, 1];
console.log(indiceMaiorNumero(list));