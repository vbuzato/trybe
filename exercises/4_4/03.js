// Faça um for/in que mostre todas as chaves do objeto.

// Valor esperado no console:

//   personagem
//   origem
//   nota
//   recorrente

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info['recorrente'] = 'sim';

for (let i in info) {
  console.log(i);
}

