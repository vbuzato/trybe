// Programa que sorteia 6 números, compara com seus números escolhidos na lista myNumbers e retorna quantos acertos você teve. 

let myNumbers = [12, 3, 20, 5, 45, 52]; // Este são os números que eu escolhi
let sortedNumbers = [];

while (sortedNumbers.length < 6) {                      // Enquanto o tamanho da lista for menor que 6  (Pois são sorteados 6 números por jogo)
    let number = Math.ceil(Math.random() * 60);         // Sorteia um número aleatório entre 1 e 60.
    while (sortedNumbers.indexOf(number, 0) !== -1) {   // O indexof retorna -1 qdo não encontra nada. Enquanto o número sorteado na linha de cima existir no grupo dos sorteados, 
    number = Math.ceil(Math.random() * 60);             // Sorteie novamente até não ser um número duplicado
  }
  sortedNumbers.push(number);                    // Adiciona o número no fim da lista de números sorteados
}
console.log("Seu jogo: " + myNumbers);
console.log("Números sorteados: " + sortedNumbers);

let acertos = 0;

for (let i = 0; i < sortedNumbers.length; i++) { // Percorre os números sorteados
  //console.log('Número Sorteado: ' + sortedNumbers[i])
  for (let j = 0; j < myNumbers.length; j++) {   // Percorre os meus números escolhidos
    //console.log('N°: ' + myNumbers[j])
    if (sortedNumbers[i] === myNumbers[j]) {     // Compara se os números de cada laço for são iguais e salva em 'hits' se for igual
      acertos += 1;
    }
  }
}

console.log("Você teve " + acertos + " acertos.")