//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

let nota = -3;

let erro = 'Erro. Digite uma nota válida.'; 

if ( nota > 100 ) {
  console.log(erro);
} else if ( nota >= 90 ) {
  console.log('Ual, ' + nota +' é uma excelente nota. Você tirou um: A');
} else if ( nota >= 80 ) {
  console.log(nota +' é ótimo, mas sempre há oportunidades para melhorar. Você tirou um: B');
} else if ( nota >= 70 ) {
  console.log('Eita pau! ' + nota +' tem bastante oportunidade de melhorias. Você tirou um: C');
} else if ( nota >= 60 ) {
  console.log('Tirou ' + nota +'. Vá no seu ritmo, mas não demore muito. Você tirou um: D');
} else if ( nota >= 50 ) {
  console.log('Sua nota foi ' + nota +'. Você ainda respira por aparelhos, mas sempre vence. haha.Você tirou um: E');
} else if ( nota >= 0 ) {
  console.log('HAHAHA. Tirou ' + nota +'! Nos vemos ano que vêm novamente. =D Você tirou um: F');
} else {
  console.log(erro);
}