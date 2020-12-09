/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function (array) {
  var pivot = array[0] //15
  var greaterThan = array.filter(num => num > pivot).sort(sortNums);
  var lessThan = array.filter(num => num < pivot).sort(sortNums);

  var final = lessThan.concat(pivot, greaterThan)

  return final
};

function sortNums(a, b) {
  return a - b;
};

var test0 = [15, 22, 2, 5, 100, 7, 31]
var test1 = [8, 5, 72, 7, 10, 22, 31]
console.log(quicksort(test1)) //[5, 7, 10, 15, 22, 31, 72]
console.log(quicksort(test0))
//i: array
//o: new array
//c:
//e: Do not include the pivot in either the less than or greater than arrays

//We want to pick a pivot point, and create two new arrays, one array with values greater than the pivot, and one with values less than the pivot point. Then we weant to sort those two arrays in order and then recombine them with the pivot in the middle

//assign var pivot to point to the first element in the array
//create var greaterThan, which filters over the array and returns all values greater than the pivot. Call the sort property to put them in order
//create var lessThan, which filters over the array and returns all values greater than the pivot. Call the sort property to put them in order.
//combine greaterThan, pivot and less than in a new array
//return new array







