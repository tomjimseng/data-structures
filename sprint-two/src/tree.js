var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
_.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {

  var found = false;
  var search = function(element) {
    if (element.value === target) {
      found = true;
    }

    if (element.children) {
      for (var i = 0; i < element.children.length; i++) {
        search(element.children[i]);
      }
    }
  };
  search(this);
  return found;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
