/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function (value) {
  var newTail = this.makeNote(value);
  if (!this.head) {
    this.head = newTail;
  }
  if (this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function () {
  var oldHead = this.head;
  if (this.head && this.head.next) {
    this.head = this.head.next;
  } else {
    this.head = this.tail = null;
  }
  return oldHead ? oldHead.value : null;
};

LinkedList.prototype.contains = function (target) {
  var node = this.head;
  while (node) {
    if (node.value === target) {
      return true;
    } else {
      node = node.next;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function (value) {
  return {
    value: value,
    next: null,
  };
};
