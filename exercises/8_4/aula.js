const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
  firstName: "João",
  lastName: "Jr II"
}

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))


function funcaoteste(info, ...rest) {
  console.log(rest);
  console.log(info);
}
const lista = [
  ['vini', 32], 'email pri', 'email pai', 'email gnt', 'email gnt', 'email gnt', 'email gnt',
];

funcaoteste(...lista);
