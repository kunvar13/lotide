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

const map = function(array, callback) {
  let results = [];
  for (let i in array) {
    results.push(callback(array[i]));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));