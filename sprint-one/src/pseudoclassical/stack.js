var Stack = function() {
  this.s = 0;
};

Stack.prototype.push = function(value) {
  this[this.s] = value;
  this.s += 1;
};

Stack.prototype.pop = function() {
  if ( this.s > 0 ) {
    var valueToReturn = this[this.s - 1];
    delete this[this.s - 1];
    this.s -= 1;
    return valueToReturn;
  }
};

Stack.prototype.size = function() {
  return this.s;
};