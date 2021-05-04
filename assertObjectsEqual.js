const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  actual === expected ?
  console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : 
  console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const eqObjects = (object1, object2) => {
  const length1 = Object.keys(object1).length;
  const length2 = Object.keys(object2).length;
  if (length1 !== length2) {
    return false;
  }

  if (typeof object1 === "object" && object1 !== null) {
    return Object.keys(object1).every((key) => object1[key] === object2[key]);
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false
