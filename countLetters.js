const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ AssertionPassed ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 AssertionFailed ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters) {
  const results = {};
const letters = allLetters.split('');
  for (const letter of letters) {
    console.log(letter);
    
      if(results[letter]) { 
        results[letter] ++;
      } else {
        results[letter] = 1;
      }
    
  };

  return results;
};

const result1 = countLetters('LHL');
console.log('Results', result1);
assertEqual(result1["L"], 2);
assertEqual(result1["T"], undefined);
assertEqual(result1["H"], 1);
