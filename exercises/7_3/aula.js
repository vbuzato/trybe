const assert = require('assert');


function sum(a, b) {
  return a + b;
}

assert.equal(sum(2, 2), 4);
assert.equal(sum(5, 2), 7);
assert.equal(sum(8, 8), 16);



const countLetters = (string) => string.length;

assert.strictEqual(countLetters('Pri'), '3');
assert.strictEqual(countLetters('xxxxx'), '5');

// firstname = 'Prisciane'
// lastname = 'Beltrão'
// fullname = 'Prisciane Beltrão'


// assert.equal(joinNames('Prisciane', 'Beltrão'), 'Prisciane Beltrão');
