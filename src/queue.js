const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.first;
  }

  enqueue(val) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new ListNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    const temp = this.first;
    this.first = this.first.next;
    return temp.value;
  }
}

module.exports = {
  Queue
};
