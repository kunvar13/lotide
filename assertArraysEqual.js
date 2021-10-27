const eqArrays = function(array1, array2) {
  let num = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        num++;
      }
    }
  } else {
    console.log(`🛑🛑🛑Assertion failed ${array1} !== ${array2}`);
  }
  if (num === 0) {
    console.log(`✅✅✅ Assertion Passed ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed ${array1} !== ${array2}`);
  }
};
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false