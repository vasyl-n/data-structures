var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target, node=this) {
  if ( node.value === target ) {
    return true;
  }
  return node.children.reduce(function(acc, child) {
    if (acc) {
      return true;
    }
    return treeMethods.contains(target, child);
  }, false);
};

var extend = function(to, from) {
  for (var i in from) {
    to[i] = from[i];
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
