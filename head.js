const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  
  } else if (actual === undefined) {
    return console.log(undefined);
  } else {
    return console.log(`🛑🛑🛑Assertion failed ${actual} !== ${expected}`);
  }

};

const head = function (kal) {
  const h0 = kal[0];
  return h0;
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");