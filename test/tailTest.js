const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it(`should return ["Lighthouse", "Labs"] when i/p is ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello","Lighthouse","Labs"]), ["Lighthouse","Labs"]);
  });

  it(`should return "Labs" when i/p is ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Lighthouse","Labs"]), ["Labs"]);
  });

});