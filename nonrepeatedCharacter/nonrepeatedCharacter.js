/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  var count = {};
  for (var i = 0; i < string.length; i++) {
    if (count[string[i]] === undefined) {
      count[string[i]] = 1;
    } else {
      count[string[i]] += 1;
    }
  }
  var OrderedArr = Object.entries(count)
  for (var j = 0; j < OrderedArr.length; j++) {
    var letters = OrderedArr[j][0];
    var numbers = OrderedArr[j][1];
    if (numbers === 1) {
      return letters;
    }
  }
};


console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'


 //i: string
 //output: a single character (string)
 //c:
 //e: other forms of output other than strings


 //create an empty count obj
 //iterate over the string
 //if countobj at each current is undefined
      //set countObj at current to  1
           //else return countOBj plus equals 1
//set OrderedArr to an array made by object..entries on count
//itarate over obj.entries
//set numbers var to OrderedArr[j[1]]
//set letters var to OrderedArr[j][0]
// if values var === 1, return letters var.


