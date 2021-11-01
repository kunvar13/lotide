const assert = require('chai').assert;
const head = require('../head');
//const assertEqual = require('../assertEqual');
describe("#head", () => {
  it("should return 5 when i/p is [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it(`should return Hello when i/p is ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it(`should return undefined when i/p is []`, () => {
    assert.strictEqual(head([], undefined));
  });

});