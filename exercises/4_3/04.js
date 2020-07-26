// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 13;
let regressivo = Math.floor(n/2);

console.log('Número escolhido:' + n);
console.log(' ');
for (let i = 1; i < (n + 1); i += 2) {
  console.log(' '.repeat(regressivo) + '*'.repeat(i));
  regressivo -= 1;
}