const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `✅✅✅ Assertion Passed ${array1} === ${array2}`;
  } else {
    return `🛑🛑🛑Assertion failed ${array1} !== ${array2}`;
  }
};

const eqArrays = function(array1, array2) {
  let num = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        num++;
      }
    }
  } else {
    return false;
  }
  if (num === 0) {
    return true;
  } else {
    return false;
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let mid = [];
  let array1 = array;
  let num = array.length;
  if (num === 1 || num === 2) {
    return mid;
  } else if (num % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
      array1.shift();
      array1.pop();
      if (array1.length === 2) {
        break;
      } else {
        continue;
      }
    }
  } else if (num % 2 !== 0) {
    for (let i = 0; i < array.length; i++) {
      //array1.splice(i,1);
      //array1.splice(array.length, 1);
      array1.shift();
      array1.pop();
      if (array1.length === 1) {
        break;
      } else {
        continue;
      }
    }
      
  }
  return array1;
};

console.log(assertArraysEqual((middle([1])),[]));// => []
console.log(assertArraysEqual((middle([1, 2])),[]));// => []
console.log(assertArraysEqual((middle([1, 2, 3])),[2]));// => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4])),[2,3]));// => [2,3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3,4]));// => [3, 4]
