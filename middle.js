const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;
