const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`โโโ Assertion Passed ${actual} === ${expected}`);
  
  } else {
    return console.log(`๐๐๐Assertion failed ${actual} !== ${expected}`);
  }

};

module.exports = assertEqual;