//Utilizando for, descubra qual o menor valor contido no array e imprima-o;



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lesser = numbers[0];

for (i of numbers) {
  if (i < lesser) {
    lesser = i;
  }
}
console.log(lesser);