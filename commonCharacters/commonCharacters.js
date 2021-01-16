/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function (string1, string2) {
  var duplicates = [];
  var string2Arr = string2.split('');
  for (var i = 0; i < string1.length; i++) {
    var char = string1[i]
    if (string2Arr.includes(char)) {
      duplicates.push(char)
    }
  }
  var final = duplicates.join('');
  return final;
};


console.log(commonCharacters('acexivou', 'aegihobu'));
//'aeiou'

//i: 2 strings
//O: string
//C:
//e;skip spaces and characters that you have already encountered. make sure you dont count duplicates in the same string

//set up a duplicates array
//convert string2 to an array
//iterate over string1,
  //for each character in string1, check if each character is in string2
        //if string2 includes the current char, push to the duplicates array
//convert duplicates array to a string1
// return duplicates string/


