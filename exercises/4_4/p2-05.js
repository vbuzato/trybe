// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.
let howManyTimes = {};

function countNumbers(list) {
  for (i in list) {
    if (list[i] in howManyTimes) {
      howManyTimes[list[i]] += 1;
    } else {
      howManyTimes[list[i]] = 1;
    }
  }
  let winner;
  let turns = 0;
  for (let j in howManyTimes) {
    if (howManyTimes[j] > turns) {
      turns = howManyTimes[j];
      winner = j;
    }
  }  
return winner;
}

let numbers = [2, 3, 2, 5, 8, 2, 3];
console.log(countNumbers(numbers));
