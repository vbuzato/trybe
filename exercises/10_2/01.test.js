const uppercase = require('./01.js');

describe('Test whether is Upper case', () => {
  it('Test whether is Upper case', () => {
    expect(uppercase('toronto', (response) => response)).toBe('TORONTO');
  });
});