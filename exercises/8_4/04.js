//Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

// Dica: use object destructuring.

const assert = require('assert')

const people = [{
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian"
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian"
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian"
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish"
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian"
  }
]

const filterPeople = (people) => {
  return people.filter(person => {
    const { name, bornIn, nationality } = person;
    return ((nationality === "Australian") && (bornIn <= 2000 && bornIn > 1900));
  });
};

const filteredPeople = filterPeople(people)

console.log(filteredPeople[0]);

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
