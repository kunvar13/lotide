const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  
  } else {
    return console.log(`🛑🛑🛑Assertion failed ${actual} !== ${expected}`);
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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);