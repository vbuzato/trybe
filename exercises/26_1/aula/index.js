const readline = require('readline-sync');

console.log('Hello, World!');

const nome = readline.question('Digite seu nome: ');

console.log('Nome: %s', nome);
console.log(`Nome: ${nome}`);