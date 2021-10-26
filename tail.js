const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  
  } else {
    return console.log(`🛑🛑🛑Assertion failed ${actual} !== ${expected}`);
  }

};

const tail = function (words) {
  let kal = [];
  for (let i = 0; i < words.length - 1; i++) {
    kal.push(words[i + 1]);
  }
  console.log(kal);
  console.log(words);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!