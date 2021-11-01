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

module.exports = eqArrays;

