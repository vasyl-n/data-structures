var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var result = false;
  for (var i = 0; i < this._storage.length; i++) {
    var element = this._storage[i];
    if ( typeof element === "object" ) {
      result = isDeepEqual(element, item);
    } else if (element === item) {
      result = true;
    }
  }
  return result;
};

setPrototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var isDeepEqual = function(obj1, obj2) {
  if ( Array.isArray(obj1) ) {
    for ( var i = 0; i < obj1.length; i++ ) {
      if ( obj1[i] !== obj2[i] ) {
        return false;
      }
    }
    return true;
  }
  for ( var i in obj1 ) {
    if ( obj1[i] !== obj2[i] ) {
      return false;
    }
  }
  return true;
};