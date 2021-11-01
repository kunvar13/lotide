const assert = require('chai').assert;
const middle = require("../middle");

describe("#tail", () => {

  it(`should return [2] when i/p is [1, 2, 3]`, () => {
    assert.deepEqual((middle([1, 2, 3])),[2]);
  });

  it(`should return [3, 4] when i/p is [1, 2, 3, 4, 5, 6]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });

  it(`should return "Labs" when i/p is ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual((middle([1])),[]);
  });

  it(`should return "Labs" when i/p is ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual((middle([1,2])),[]);
  });

});


/*console.log(assertArraysEqual((middle([1])),[]));// => []
console.log(assertArraysEqual((middle([1, 2])),[]));// => []
console.log(assertArraysEqual((middle([1, 2, 3])),[2]));// => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4])),[2,3]));// => [2,3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3,4]));// => [3, 4]*/