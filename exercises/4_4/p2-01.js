// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara.

// verificaPalindrome("arara");

// Retorno esperado: true

// verificaPalindrome("desenvolvimento");

// Retorno esperado: false

function verificaPalindrome(word) {
  let reverse = '';
  for ( let i of word) {
    reverse = i + reverse.substr(0)
  }
  if ( word === reverse){
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('ana'));


