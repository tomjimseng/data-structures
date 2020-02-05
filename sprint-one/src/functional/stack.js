var Stack = function() {
  //specification - object
  //do not use Array, input can be any value; when push occurs increase size by 1; when pop occurs decrease size by 1;
  // purpose of the function is to show the increase and decrease in size as variables are added or removed
  //input is any value which is pushed into the object then either removed or left within the object

  var someInstance = {};

  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //set someInstance to be a value in regards to size
    // increment size
    someInstance[size] = value;
    size++;
  };

  someInstance.pop = function() {
    // edge case if size is already zero return zero not negative
    //decrement size 
    // create deleted var to return for pop();
    // delete Instance[size]
    // return deleted

    if (size === 0) {
      return 0;
    }

    size--;

    var deleted = someInstance[size];
    delete someInstance[size];
    return deleted;
    

  };

  someInstance.size = function() {
    // return size after increment and decrement as someInstance.size
    return size;
  };

  return someInstance;
};
