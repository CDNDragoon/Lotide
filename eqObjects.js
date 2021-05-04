const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ AssertionPassed ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 AssertionFailed ${actual} !== ${expected}`);
  }
};

function eqArrays(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
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
const bc = { a: "1", b: "2" };

const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

module.exports = eqObjects