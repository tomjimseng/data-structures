var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      var position = this.head;
      while (position.next !== null) {
        position = position.next;
      }
      position.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;

  };

  list.contains = function(target) {
    var position = this.head;
    while (position.next !== null) {
      if (target === position.value) {
        return true;
      }
      position = position.next;
    }
    if (target === position.value) {
      return true;
    }
    return false;
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
