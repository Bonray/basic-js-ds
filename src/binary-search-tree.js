const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.treeRoot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new Node(data);
    if (!this.treeRoot) this.treeRoot = newNode;
    else {
      let current = this.treeRoot;
      while (true) {
        if (data > current.data) {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            return this;
          }
        } else {
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            return this;
          }
        }
      }
    }
  }

  has(data) {
    if (!this.treeRoot) return false;
    else if (this.treeRoot.data === data) return true;
    let current = this.treeRoot;
    let isFound = false;
    while (!isFound && current) {
      if (data > current.data) {
        current = current.right;
      } else if (data < current.data) {
        current = current.left;
      } else {
        isFound = true;
      }
    }
    return isFound;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return null;
    else if (this.treeRoot.data === data) return this.treeRoot;
    let current = this.treeRoot;
    let isFound = false;
    while (!isFound && current) {
      if (data > current.data) {
        current = current.right;
      } else if (data < current.data) {
        current = current.left;
      } else {
        isFound = true;
      }
    }
    if (!isFound) return null;
    return current;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if (!this.treeRoot) return null;
    // const node = this.find(data);
    // if (!node) return null;
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return null;
    let current = this.treeRoot;
    while (current && current.left) current = current.left;
    return current.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return null;
    let current = this.treeRoot;
    while (current && current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};