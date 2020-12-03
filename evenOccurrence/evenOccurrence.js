/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:

*/

var evenOccurrence = function (arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    //arr[i].toString();
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  var evenOccurs = []
  for (var keys in obj) {
    if (obj[keys] % 2 === 0) {
      evenOccurs.push(keys)
    }
  }
  if (evenOccurs.length === 0) {
    return null;
  } else {
    var finalValue = parseInt(evenOccurs[0])
    return  finalValue;
  }

};


var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

//i: array
//o: number
//c: n/an
//e: return null if there is no even occurences

//create an empty object
//iterate over the array
  //if the current element of the array is not found (undefined), then set obj at the current element to 1,
      //else incremenet object at current element by 1
      //use a for in loop to find the first property that is 2, and return its key
      //if there is no even propety, return null
