const assert = require('chai').assert
const middle = require('../middle');

describe("#middle", () => {
  it("return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  })
  it("return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
});

// console.log(middle([1])); 
// console.log(middle([1, 2])); 

// console.log(middle([1, 2, 3])); 
// console.log(middle([1, 2, 3, 4, 5])); 

// console.log(middle([1, 2, 3, 4])); 
// console.log(middle([1, 2, 3, 4, 5, 6]));