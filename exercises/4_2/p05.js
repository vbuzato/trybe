// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//  let max = numbers.reduce(function(a, b) {
//   return Math.max(a, b);
// });

// Descubra qual o maior valor e imprima-o:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let max = numbers[0];

// for (i of numbers) {
//   if (max < i) {
//     max = i;
//   }
// }
// console.log(max)

// // console.log(Math.max(console.log(numbers)))


// Descubra qual o maior valor e imprima-o:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = numbers.reduce(function(x, y) {
  if ( x > y ) {
    return (x);
  }
    return (y);
})

console.log(' O maior número da lista é: ' + max);







