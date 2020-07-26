// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 9;
let regressivo = Math.floor(n/2);

console.log('Número escolhido:' + n);
console.log(' ');

for (let i = 1; i < (n + 1); i += 2) {
  if (i === 1) {
    console.log(' '.repeat(regressivo) + '*'.repeat(i));
    regressivo -= 1;
  } else if (i > 1 && i < n) {
    console.log(' '.repeat(regressivo) + '*' + ' '.repeat(i - 2) + '*');
    regressivo -= 1;
  } else {
    console.log(' '.repeat(regressivo) + '*'.repeat(i));
    regressivo -= 1;
  }
}