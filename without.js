const without = function(array1, array2) {
  let indToRemove = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        indToRemove.push(i);
      }
      
    }
  }
  const modArray = function(indToRemove) {
    for (let k = 0; k < indToRemove.length; k++) {
      array1.splice(indToRemove[k],1);
    }
    return (array1);
  };

  modArray(indToRemove);
  //return array1;
};

console.log((without([1, 2, 3], [1]), [2,3])); // => [2, 3]
console.log((without(["1", "2", "3"], [1, 2, "3"]),["1","2"])); // => ["1", "2"]

// Need to add test case