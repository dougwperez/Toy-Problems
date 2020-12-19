/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *

 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function (str) {
  if (str.length === 1) {
  }
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    var end = str[i + 1]
    if (str[i + 1] === undefined) {
      end = str[0]
    }
    console.log(str[i] + end)


  }
};

console.log(powerSet("abc"))
//[ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]

console.log(powerSet("jump"))


//i: string
//o: array of strings
//e: ba and ab are considered duplicates and only count once. Also count the empty string


//if string.length === 1,
