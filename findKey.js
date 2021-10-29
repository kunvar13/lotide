const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅✅✅ Assertion Passed ${actual} === ${expected}`;
  
  } else {
    return `🛑🛑🛑Assertion failed ${actual} !== ${expected}`;
  }

};

const findKey = function(obj, callback) {
  let resultObj = "";
  for (let i in obj) {
    if (callback(obj[i]) === true) {
      resultObj = i;
      break;
    }
  }
  return resultObj;
};
let obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
console.log(assertEqual(findKey(obj1, x => x.stars === 2), "noma"));// => "noma"


