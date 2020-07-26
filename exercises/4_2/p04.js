let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
numbers.push(175);

for (i of numbers) {
  soma = (soma + i);
} 
console.log(soma/numbers.length);

if (soma/numbers.length > 20) {
  console.log('Valor maior que 20.')
} else {
  console.log('Valor menor ou igual a 20.')
}