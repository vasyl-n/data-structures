var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.s = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.s] = value;
  this.s += 1;
};

stackMethods.pop = function() {
  if ( this.s > 0 ) {
    var keyToRemove = this[this.s - 1];
    delete this[this.s - 1];
    this.s -= 1;
    return keyToRemove;
  }
};

stackMethods.size = function() {
  return this.s;
};