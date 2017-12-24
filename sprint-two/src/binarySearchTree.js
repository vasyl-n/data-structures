var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value || null;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert = function(newValue) {
  var newNode = BinarySearchTree(newValue);
  if ( this.value === null ) {
    this.value = newValue;
  } else if ( this.value > newValue && this.left !== null) {
    this.left.insert(newValue);
  } else if ( this.value > newValue && this.left === null ) {
    this.left = newNode;
  } else if ( this.value < newValue && this.right !== null) {
    this.right.insert(newValue);

  } else if (this.value < newValue && this.right === null) {
    this.right = newNode;
  }
};

BinarySearchTree.prototype.contains = function(searchValue) {
  var trueOrFalse = undefined;
  var func = function( node ) {
    if ( node === null) {
      trueOrFalse = false;
      return;
    }
    if (node.value === searchValue) {
      trueOrFalse = true;
    } else if (searchValue < node.value) {
      func(node.left);
    } else if (searchValue > node.value) {
      func(node.right);
    } else {
      trueOrFalse = false;
    }
  };
  func( this );
  return trueOrFalse;
};


BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // cb(this.value)
  // if ( this === null) {
  //   return
  // }
  // else
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */