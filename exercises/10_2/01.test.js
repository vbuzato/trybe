const uppercase = require('./01.js');

describe('Test whether is Upper case', () => {
  it('Test whether some words are upper case', (done) => {
    uppercase('toronto', (response) => {
      expect(response).toBe('TORONTO');
      done();
    });
  });
});