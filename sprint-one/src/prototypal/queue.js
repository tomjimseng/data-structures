var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstanceOf = Object.create(queueMethods);
  someInstanceOf.num = 0;
  someInstanceOf.back = 0;
  someInstanceOf.front = 0;
  return someInstanceOf;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this[this.back] = value;
	this.back++;
};

queueMethods.dequeue = function() {
	if (this.back - this.front === 0) {
		return 0;
	}
	
	var deleted = this[this.front];
	delete this[this.front];
	this.front++;
	return deleted;
};

queueMethods.size = function() {
	this.num = this.back - this.front;
	return this.num;
};
