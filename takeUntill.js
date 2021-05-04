const takeUntil = function(array, callback) {
  returnArray = [];
  for (const val of array) {
        if (callback(val)) break;
        returnArray.push(val); 
    }
  return returnArray;
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]

console.log(eqArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]));
console.log(eqArrays(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]));