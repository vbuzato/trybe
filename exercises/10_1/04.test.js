const myFizzBuzz = require('./04.js');

describe('myFizzBuzz function check', () => {
  it('Check the functions returns', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});