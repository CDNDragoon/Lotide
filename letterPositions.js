const letterPositions = function(sentence) {
    const results = {};
  const letters = sentence.split('');
  let i = -1;
    for (const letter of letters) {
      i++;
      console.log(letter);
      
        if(results[letter]) { 
          results[letter].push(i);
        } else {
          results[letter] = [i];
        }
    };
    return results;
  };

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log("They are equal", arrayOne, "===", arrayTwo);
  } else {
      console.log("They are not equal", arrayOne, "!==", arrayTwo);
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
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ AssertionPassed ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 AssertionFailed ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);

const result1 = letterPositions('Lighthouse Labs');
console.log('Results', result1);