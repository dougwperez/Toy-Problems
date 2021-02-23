/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function (arr) {
  //transform arr to be an object
  //for each element in "this"(var a and b)
  //if element is not in the object, return false
  //if we an complete the loop, then we return true
  var obj = objectify(arr);
  return this.reduce(function (accumulator, value) {
    if (!obj[value]) {
      return false;
    }
    return accumulator;
  }, true);
};

function objectify(arr) {
  var obj = {};
  arr.forEach(function (value) {
    obj[value] = 1;
  });
  return obj;
}

var a = ["commit", "push"];
console.log(a.isSubsetOf(["commit", "rebase", "push", "blame"])); // true

var b = ["merge", "reset", "reset"];

b.isSubsetOf(["reset", "merge", "add", "commit"]); // true

//i: array
//o: boolean
//c: n/a
//e: disregard duplicates
