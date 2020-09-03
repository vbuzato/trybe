const myRemove = require('./02.js');

describe('myRemove function check', () => {
  it('Check whether function returns the correct array', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
  it('Check that the array passed by parameter has not changed', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});