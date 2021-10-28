const asserArraysEqual = function (array1, array2) {
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
console.log(asserArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(asserArraysEqual([1, 2, 3], [3, 2, 1]));// => false

console.log(asserArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(asserArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false