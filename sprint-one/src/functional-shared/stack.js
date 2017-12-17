var Stack = function() {
  var obj = { storage: {} };
  extend( obj, methods );
  return obj;
};

methods = {
  size: function() { return Object.keys(this.storage).length; },
  push: function(value) { this.storage[Object.keys(this.storage).length] = value; },
  pop: function() {
    var itemToReturn = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage['0'];
    return itemToReturn;
  }
};

var extend = (to, from) => {
  for ( var i in from) {
    to[i] = from[i];
  }
};