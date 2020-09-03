const sum = require('./01.js');

describe('Test whether the sum function works.', () => {
  it('Sum test with numbers', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });
  it('Check if an error occurs when trying to add a string', () => {
    expect(() => sum(4,'5')).toThrow();
  });
  it('Check if an error message occurs when trying to add a string', () => {
    expect(() => sum(4,'5')).toThrow(/^parameters must be numbers$/);
  });
})