const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ AssertionPassed ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 AssertionFailed ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) { 
      console.log('found', item, itemsToCount[item])
      if(results[item]) { 
        results[item] ++;
      } else {
        results[item] = 1;
      }
    }
  };

  return results;
};


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log('Results', result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);