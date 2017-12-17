var Stack = function() {
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    var key = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return key;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
