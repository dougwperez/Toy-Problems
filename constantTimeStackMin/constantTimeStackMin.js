
//  * Write a stack using your preferred instantiation pattern. Implement a min function
//  * that returns the minimum value of all the elements in the stack in constant time.stack.

//  * All of the functions in the Stack should run in constant time!
//  *

//  * Stack Class
// */


class Stack {
  constructor() {
    this.result = [];
    this.smallest = 0;
  }

  push(value) {
    this.result.push(value)
  };

  pop() {

  };
  //size first item in array
  size() {
    this.result[0]
  };

  min() {

    var minimum = this.result[0]

    return this.result.forEach(function (el) {
      if (el <= minimum) {
        minimum = el
        return minimum
      }
      console.log('minimum', minimum)

    })
  };

}


var example = new Stack()
example.push(4)
example.push(3)
example.min() //=== 3
// example.push(3)
// example.push(2)
// example.push(2)
// example.min()// === 2

console.log(example)


   //I: numbers which we add to an array
   //o: the smallest numbers

   //set up problem with es6 instantiation
   //set up a result array in the constructor

