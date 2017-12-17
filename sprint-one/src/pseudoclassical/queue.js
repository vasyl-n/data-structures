var Queue = function() {
  this.s = 0;
  this.firstInd = 0;
  this.lastInd = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.lastInd] = value;
  this.s += 1;
  this.lastInd += 1;
};

Queue.prototype.dequeue = function() {
  if ( this.s > 0 ) {
    var valueToReturn = this[this.firstInd];
    delete this[this.firstInd];
    this.s -= 1;
    this.firstInd += 1;
    return valueToReturn;
  }
};

Queue.prototype.size = function() {
  return this.s;
};