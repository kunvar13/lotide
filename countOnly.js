const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  
  } else {
    return console.log(`🛑🛑🛑Assertion failed ${actual} !== ${expected}`);
  }

};

const countOnly = function(firstNames, obj1) {
  let resultObj = {};
  let num = 0;
  for (let j in obj1) {
    num = 0;
    for (let i = 0; i < firstNames.length; i++) {
      //console.log(firstNames[i] , j , obj1[j]);
      if (firstNames[i] === j && obj1[j] === true) {
        num++;
        resultObj[firstNames[i]] = num;
      }
    
    }
    
  }
  return resultObj;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Joe": true});
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);