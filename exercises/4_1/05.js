// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

//// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let a1 = 60
let a2 = 30
let a3 = 90

if (a1+a2+a3 == 180) {
  console.log('True')
} else {
  console.log('False')
}

