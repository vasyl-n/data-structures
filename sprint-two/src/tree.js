var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target, node=this) {
  //debugger
  if ( node.value === target ) {
    return true;
  }

  for ( var i = 0; i < node.children.length; i++ ) {
    return treeMethods.contains(target, node.children[i]);
  }

  return false;
};


// a = new Tree()
// a.addChild(7)
// a.contains(4)


var extend = function(to, from) {
  for (var i in from) {
    to[i] = from[i];
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
