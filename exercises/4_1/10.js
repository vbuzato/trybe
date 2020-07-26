let c = 60;
let v = 110;
lucro = ((v - c) * 1000) * 0.8

if (c <= 0) {
  console.log('Erro: valor incorreto.')
} else {
  console.log('A empresa ganhará de lucro das vendas R$ ' + lucro)
}