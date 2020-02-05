var Stack = function() {
  //specification - object
  //do not use Array, 
  var someInstance = {};

  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size === 0) {
      return 0;
    }
    
    size--;

    var deleted = someInstance[size];
    delete someInstance[size];
    return deleted;
    

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
