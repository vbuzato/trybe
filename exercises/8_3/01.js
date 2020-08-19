// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

function flatten() {
  return arrays.reduce((acc, curValue) => acc.concat(curValue));
}

console.table(flatten());

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
