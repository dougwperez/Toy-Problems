/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

//TEST COMMIT

var longestRun = function (string) {
  var longest = [0, 0];
  var currentRun = [0, 0];

  for (var i = 1; i < string.length; i++) {
    if (string.charAt(i - 1) === string.charAt(i)) {
      currentRun[1] = i;
      if (currentRun[1] - currentRun[0] > longest[1] - longest[0]) {
        longest = currentRun.slice();
      }
    } else {
      currentRun = [i, i];
    }
  }
  return string.length > 0 ? longest : null;
};

//iterate over the string
//

// var randomString = function (len) {
// var results = 0;
// var currentRun = 0;

//   var text = "";
//   var possible = "abcdefghijklmnopqrstuvwxyz";

//   for (var i = 0; i < len; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text
// }

console.log(longestRun("abbbcc")); // [1, 3]
console.log(longestRun("aabbc")); // [0, 1]
console.log(longestRun("abcd")); // [0, 0]
console.log(longestRun("")); // null
console.log(longestRun(randomString(30))); //
console.log(longestRun(randomString(20))); //
console.log(longestRun(randomString(10))); //
