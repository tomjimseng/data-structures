var Queue = function() {
  //object to add to start and remove from back
  //function sets values in queue to add or remove
  //input is to show enqueue addition and dequeue removal of value with specified positions
  //
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // use size to tie value within someInstance
    // add value to back
    // increment  back
    someInstance[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    // edge case if size is already zero
    // return zero
    //increment front
    //create a deleted var
    // set deleted from front
    // return deleted
    if (back - front === 0) {
      return 0;
    }
    
    var deleted = someInstance[front];
    delete someInstance[front];
    front++;
    return deleted;

  };

  someInstance.size = function() {
    var size = back - front;
    return size;
  };

  return someInstance;
};
