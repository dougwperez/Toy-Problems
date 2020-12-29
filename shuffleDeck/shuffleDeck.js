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
  // Your code here.


  var inputArr = string.split('')
  inputArr.so
};

var helperShuffle = function (deck) {
  var i = deck.length
  var j = 0;
  let temp;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = deck[i];
    deck[i] = deck[j]
    deck[j] = temp;
  }
  return deck
};



//i: string
//o: array of strings
//c:
//e: empty string, numbers?

var test1 = allAnagrams('abc')
console.log(test1) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// 1 char = 1 set up
// 2char - 2 setups
// 3char - 6 set ups
// 4char -



//explanation:We want to find all of the different possible combinations of the string.
//justificiation:

//create an obj

//set up a shuffler helper function
//allAnagrams function
//create store obj
//create var data array, use split to convert string into an array
//call shuffle function on array
//add the list of calls to the array


