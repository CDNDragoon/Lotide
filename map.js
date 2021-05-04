const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);
const results4 = map(words, word => word[3]);

console.log(eqArrays(results1, ['g', 'c', 't', 'm', 't']));
console.log(eqArrays(results2, ['r', 'o', 'o', 'a', 'o']));
console.log(eqArrays(results3, ['o', 'n', undefined, 'j', 'm']));
console.log(eqArrays(results4, ['u', 't', undefined, 'o', undefined]));