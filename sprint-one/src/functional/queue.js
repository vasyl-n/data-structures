var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    var ind = biggestNum(Object.keys(storage))
    storage[ind + 1] = value;
  };

  someInstance.dequeue = function() {
    var ind = smallestNum(Object.keys(storage))
    var key = storage[ind];
    delete storage[ind];
    return key
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var smallestNum = function(array){
  var num = array[0];
  for( var i = 0; i < array.length; i++){
    if( array[i] < num ){
      num = array[i];
    }
  }
  return num;
};

var biggestNum = function(array){
  var num = array[0];
  for( var i = 0; i < array.length; i++){
    if( array[i] > num ){
      num = array[i];
    }
  }
  return num;
}