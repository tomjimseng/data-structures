var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstanceOf = {};
someInstanceOf.num = 0;
_.extend(someInstanceOf, stackMethods);

return someInstanceOf;


};

var stackMethods = {};

stackMethods.push = function(value) {
	this[this.num] = value;
	this.num++;
};

stackMethods.pop = function() {
	if (this.num === 0) {
		return 0;
	}
	this.num--;
	var deleted = this[this.num];
	delete this[this.num];
	return deleted;
};

stackMethods.size = function() {
	return this.num;
};


