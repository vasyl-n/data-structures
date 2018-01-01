

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if ( bucket === undefined ) {
    bucket = [[k, v]];
  } else {
    bucket.push([k, v]);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var result;
  bucket.forEach(function(tuple) {
    if ( tuple !== undefined ) {
      if( tuple[0] === k ) {
        result = tuple[1];
      }
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      bucket[i] = undefined;
    }
  }
  this._storage.set(index, bucket);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// HashTable.insert("a", 5)
// HashTable.retrieve("a") => 5