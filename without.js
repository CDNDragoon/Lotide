const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ AssertionPassed ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 AssertionFailed ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

const tail = function(arr) {
  arr.shift();
  return arr;
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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log("They are equal", arrayOne, "===", arrayTwo);
  } else {
      console.log("They are not equal", arrayOne, "!==", arrayTwo);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const without = (arrayOne, arrayTwo) => { 
  let filtered = [];
  for (const element of arrayOne) {
    if (!arrayTwo.includes(element)) {
      filtered.push(element)

    }
  }
  return filtered;
} 
console.log("This is a test", !true);
console.log("This is the OG", array);
// console.log(without);

//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


// assertArraysEqual([3, 2, 1], [1, 2, 3]);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3);
// console.log(tail(words));

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);

const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log("The result", result);
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

