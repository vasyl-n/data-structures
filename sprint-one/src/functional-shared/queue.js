var Queue = function() {
  let obj = { storage: {}, s: 0 };
  extend( obj, queueMethods );
  return obj
};

const queueMethods = {
  enqueue: function(value){
    this.s += 1;
    this.storage[Number(maxNum(Object.keys(this.storage))) + 1] = value
  },
  dequeue: function(){
    if ( this.s > 0 ){
      let elementToDelete = this.storage[minNum(Object.keys(this.storage))]
      delete this.storage[minNum(Object.keys(this.storage))]
      this.s -= 1;
      return elementToDelete;
    }
  },
  size: function(){
    return this.s
  }
};


var extend = function(to, from) {
  for ( let i in from ) {
    to[i] = from[i];
  }
}

var minNum = function(array){
  var min = array[0];
  for( var i = 0; i < array.length; i++){
    if( array[i] < min ){
      min = array[i];
    }
  }
  return min || 0;
}

var maxNum = function(array){
  var max = array[0];
  for( var i = 0; i < array.length; i++){
    if( array[i] > max ){
      max = array[i];
    }
  }
  return max || -1;
}