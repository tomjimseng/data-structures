class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.num;
  	this.back = 0;
  	this.front = 0;
  	this.container = {};
  }


enqueue(value) {
this.container[this.back] = value;
this.back++;
}


dequeue() {
if (this.back - this.front === 0) {
	return 0;
}
var deleted = this.container[this.front];
delete this.container[this.front];
this.front++;
return deleted;
}


size() {
this.num = this.back - this.front;
return this.num;
}

}
