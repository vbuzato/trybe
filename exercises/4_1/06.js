// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop -> diagonals

let p = 'BISPO'.toLowerCase();


if (p === 'dama') {
  console.log('Dama move-se para: vertical, horizontal e diagonal, quantas casas quiser.')
} else if (p === 'rei') {
  console.log('Rei move-se para:: vertical, horizontal e diagonal, uma casa por vez.')
} else if (p === 'torre') {
  console.log('Torre move-se para: vertical e horizontal, quantas casas quiser.')
} else if (p === 'bispo') {
  console.log('Bispo move-se para: diagonal, quantas casas quiser.')
} else if (p === 'cavalo') {
  console.log('Cavalo move-se para: saltar sobre as outras peças do tabuleiro, movimento em "L".')
} else if (p === 'peao') {
  console.log('Peão move-se para: uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas')
} else {
  console.log('Erro. Digite corretamente.')
}
