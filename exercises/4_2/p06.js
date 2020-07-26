// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let cont = 0;
// for (i of numbers) {
//   if ((i % 2) !== 0) {
//     cont = cont + 1;
    
//   }
// }

// console.log(cont)




let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
for (i of numbers) {
  if ((i % 2) !== 0) {
  impares.push(i)
  }
}

console.log(impares.length)
