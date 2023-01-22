// One way to create a stack using a queue data structure is to use two queues, let's call them queue1 and queue2.
// The enqueue operation in the stack can be implemented as follows:

// When adding an element to the stack, we enqueue it to queue1.
// The dequeue operation in the stack can be implemented as follows:

// To perform the LIFO operation, we dequeue all elements from queue1 except the last element, and enqueue them to queue2.
// The last element in queue1 is the element that was added last, and therefore should be at the top of the stack. We return this element as the dequeue operation result.
// Finally, we swap the names of queue1 and queue2 so that queue1 is now empty and queue2 contains all elements in the new order.

class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(element) {
    this.queue1.push(element);
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    let top = this.queue1.shift();
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    return top;
  }
}
