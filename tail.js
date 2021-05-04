const tail = function(array) {
  return (array.length === 1 ? array : array.slice(1));
};
 
module.exports = tail;