// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;

console.log('Número escolhido:' + n);
console.log(' ');
for (let i = 0; i < n; i += 1) {
  console.log(' '.repeat(n-i) + '*'.repeat(i+1));
}
