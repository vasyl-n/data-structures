var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null ) {
      list.head = newNode;
      list.tail = newNode;
    }
    if ( list.tail !== null ) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target, node) {
    if ( node === undefined ) {
      node = list.head;
    }
    if ( target === node.value ) {
      return true;
    }
    if ( node.next === null ) {
      return false;
    }
    node = node.next;
    return list.contains(target, node);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
