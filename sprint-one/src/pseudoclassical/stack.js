var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.num = 0;
};

Stack.prototype.push = function(value) {
	this[this.num] = value;
	this.num++;
};

Stack.prototype.pop = function(value) {
	if(this.num === 0) {
		return 0;
	}
	this.num--;
	var deleted = this[this.num];
	delete this[this.num];
	return deleted;
};

Stack.prototype.size = function(value) {
	return this.num;
};