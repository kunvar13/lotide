const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `โโโ Assertion Passed ${array1} === ${array2}`;
  } else {
    return `๐๐๐Assertion failed ${array1} !== ${array2}`;
  }
};

module.exports = assertArraysEqual;