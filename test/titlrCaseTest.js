const assert = require('chai').assert;
const titleCase = require('../titlrCase');
//const assertEqual = require('../assertEqual');
describe("#capitalCase", () => {
  it("should return All Lower Case Words when i/p is all lower case words", () => {
    assert.equal(titleCase("all lower case words"), "All Lower Case Words");
  });

  it("should return Handle Weird Vowel Case when i/p is hAndlE wEIrd vOwEl cAsE", () => {
    assert.equal(titleCase("hAndlE wEIrd vOwEl cAsE"), "Handle Weird Vowel Case");
  });

});