/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
  var anagram = {};
  var generator = function (text, options) {
    if (text.length === string.length) {
      anagram[text] = true;
    }
    for (var i = 0; i < options.length; i++) {
      generator(text + options[i],
        options.slice(0, i) + options.slice(i + 1))
      console.log('options', options)
    }
  }
  generator('', string);
  return Object.keys(anagram);
};


var test1 = allAnagrams('abc')
console.log(test1) //[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

var test2 = allAnagrams('ab')
console.log(test2) //[ 'ab', 'ba']