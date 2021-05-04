function eqArrays(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log("They are equal", arrayOne, "===", arrayTwo);
  } else {
      console.log("They are not equal", arrayOne, "!==", arrayTwo);
  }
};

module.exports = assertArraysEqual;