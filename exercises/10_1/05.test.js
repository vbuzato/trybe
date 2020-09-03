const [obj1, obj2, obj3] = require('./05.js');

describe('Check whether two arrays are equals', () => {
  it('Check whether two arrays are equals', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
  });
});