// Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

// Use como base para os exercícios a seguir:

//   6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

//   Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.name === name);
      if (result !== undefined) resolve(result);
      reject('Nenhum animal com esse nome!')
    }, 1000);
  });
}

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrAnimals = Animals.filter((animal) => animal.age === age );
      if (arrAnimals.length > 0) resolve(arrAnimals);
      reject('Nenhum animal com essa idade!')
    }, 1000)
  })
}

const getAnimal = (nameOrAge) => {
  if (typeof nameOrAge === 'number') return findAnimalByAge(nameOrAge);
  return findAnimalByName(nameOrAge);
}

module.exports = getAnimal;
