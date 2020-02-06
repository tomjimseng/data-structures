var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.num;
  this.back = 0;
  this.front = 0;

};

Queue.prototype.enqueue = function(value) {
	this[this.back] = value;
	this.back++;
};

Queue.prototype.dequeue = function(value) {
	if(this.back - this.front === 0) {
		return 0;
	}
	var deleted = this[this.front];
	delete this[this.front];
	this.front++;
	return deleted;
};

Queue.prototype.size = function(value) {
	this.num = this.back - this.front;
	return this.num;
};
