const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//function to find out size of an Object
const sizeObj = function(obj1) {
  let num = 0;
  for (let i in obj1) {
    num++;
  }
  return num;
};

//function to comapre the two objects with arrays inside

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

const eqObjects = function(obj1, obj2) {
  let num = 0;
  let kal1;
  let kal2;
  //let result;
  if (sizeObj(obj1) === sizeObj(obj2)) {
    for (let i in obj1) {
      for (let j in obj2) {
        kal1 = typeof obj1[i];
        kal2 = typeof obj2[j];
        if (kal1 === kal2) {
          if (kal1 === 'object') {
            if (eqArrays(obj1[i], obj2[j]) === true) {
              num++;
            }
          } else if (obj1[i] === obj2[j]) {
            num++;
          }
        } else {
          continue;
        }
      }
    }
    if (num === sizeObj(obj1)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false