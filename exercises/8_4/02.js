// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja: use parâmetro rest.

const assert = require('assert')

const sum = (...rest) => rest.length > 0 ? rest.reduce((a, b) => a + b, 0) : 0;

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
