//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0; //Ímpar

for (i of numbers) {
  if ((i % 2) !== 0) {
    odd += 1;
  }
}
console.log(odd);