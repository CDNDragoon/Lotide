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

const middle = function(array) {
  let newArray = [];
  if (array.length === 1 || array.length === 2){
    return newArray;
  }
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 !== 0) { // checking for odd
      newArray.push(array[Math.floor(array.length / 2)])
      return newArray;
    } else if (array.length % 2 === 0) {
      newArray.push(array[(array.length / 2) - 1])
      newArray.push(array[array.length / 2])
      return newArray;
    }
  };
}; 
module.exports = middle;