var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  var container = set._storage;
  for (var i = 0; i < container.length; i++) {
    if (container[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
