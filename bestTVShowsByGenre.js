const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`โโโ Assertion Passed ${actual} === ${expected}`);
  
  } else {
    return console.log(`๐๐๐Assertion failed ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(bestTVShowsByGenre, show) {
  for (let i in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[i] === show) {
      return i;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);