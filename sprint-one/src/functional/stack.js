var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length]= value;
    console.log(storage)
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
