var BinarySearchTree = function(value) {
	var newTree = Object.create(BinarySearchTree);
	newTree.value = value;
	newTree.left = null;
	newTree.right = null;
	return newTree;
};

BinarySearchTree.insert = function(value) {
	if (!this.left && !this.right) {
	  BinarySearchTree(value);
	}
	var position = this;
	var insertNode = function(n) {
	  if (n.value < value) {
		if (position.right === null) {
		  position.right = BinarySearchTree(value);
		  return;
		} else {
		  position = position.right;
		  insertNode(position);
		}
		} else {
		if (position.left === null) {
		  position.left = BinarySearchTree(value);
		  return;
		} else {
		  position = position.left;
		  insertNode(position);
		}
	}
  }


	insertNode(position);
};

BinarySearchTree.contains = function(target) {

  if (this.value === target) {
    return true;
  } else {
    if (this.value > target && this.left !== null) {
        return this.left.contains(target);
    } else if (this.value < target && this.right !== null) {
        return this.right.contains(target);
    }
    return false;
  }
};

BinarySearchTree.depthFirstLog = function(func) {
	
	func(this.value);

	if (this.left !== null) {
		this.left.depthFirstLog(this.value);
	}

	if (this.right !== null) {
		this.left.depthFirstLog(this.value);
	}

};

/*
 * Complexity: What is the time complexity of the above functions?
 */