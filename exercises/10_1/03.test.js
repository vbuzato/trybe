const myRemoveWithoutCopy = require('./03.js');

describe('myRemoveWithoutCopy function check', () => {
  it('Check whether function returns the correct array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Check that the array passed by parameter has not changed', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).not.toEqual([1, 2, 3, 4]);
  });
});