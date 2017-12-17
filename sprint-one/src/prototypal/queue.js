var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.s = 0;
  newQueue.firstInd = 0;
  newQueue.lastInd = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.lastInd] = value;
  this.s += 1;
  this.lastInd += 1;
},
queueMethods.dequeue = function() {
  if ( this.s >= 0 ) {
    var keyToDelete = this[this.firstInd];
    delete this[this.firstInd];
    this.firstInd += 1;
    this.s -= 1;
    if ( this.s < 0 ) { this.s = 0; }
    return keyToDelete;
  }
},
queueMethods.size = function() {
  return this.s;
};