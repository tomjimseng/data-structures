class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.num = 0;
  	this.container = {};
  }

  push(value) {
  	this.container[this.num] = value;
  	this.num++;
  }

  pop() {
  	if (this.num === 0) {
  		return 0;
  	}
  	this.num--;
  	var deleted = this.container[this.num];
  	delete this.container[this.num];
  	return deleted;
  }

  size() {
  	return this.num;
  }
}

