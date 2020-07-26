// let listaVazia= [];
// let lista = ['Vinicius', 'Prisciane', 'Lauren', 'Pedro'];

// //console.log(lista)
//  let lista2 = [2, 'Vinicius', [03, 05, 1988], ['Curitiba', 'PR']]

// console.log(lista2[0])
// console.log(lista2[1])
// console.log(lista2[2])
// console.log(lista2[3])

// console.log(lista2[3][1])

let lista = ['Vinicius', 'Prisciane', 'Lauren'];

console.log(lista.length);

lista.push('Pedro'); // Adiciona itens no fim da lista

console.log(lista.length);
console.log(lista);

lista.pop();
console.log('Depois do pop()');
console.log(lista.length);
console.log(lista);

let nums = [10,4,5,3,8,9,2,1];
console.log(nums);
console.log(nums.sort((a,b) => a-b));
