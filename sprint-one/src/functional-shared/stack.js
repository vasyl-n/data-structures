var Stack = () => {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = { storage: {} ,constructor: Stack};
  extend(obj, methods )
  return obj
};

methods = {
  size: function(){ return Object.keys(this.storage).length },
  push: function(value){ this.storage[Object.keys(this.storage).length] = value },
  pop: function(){
    var itemToReturn = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage['0'];
    return itemToReturn;
  },
  // constructor: function() {return this}
};


var extend = (to, from) => {
  for( var i in from){
    to[i] = from[i]
  }
}