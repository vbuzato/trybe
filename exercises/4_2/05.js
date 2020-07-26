//Utilizando for, descubra qual o maior valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greater = numbers[0];

for (i of numbers) {
  if (i > greater) {
    greater = i;
  }
}
console.log(greater);

// var arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// var max = arr.reduce(function(a, b) {
//   return Math.max(a, b);
// });

// console.log(max);