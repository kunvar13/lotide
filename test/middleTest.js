const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
console.log(assertArraysEqual((middle([1])),[]));// => []
console.log(assertArraysEqual((middle([1, 2])),[]));// => []
console.log(assertArraysEqual((middle([1, 2, 3])),[2]));// => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4])),[2,3]));// => [2,3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3,4]));// => [3, 4]