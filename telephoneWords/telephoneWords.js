/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString, lettersOBJ) {
  var anagram = {}
  var letters = []
  
for (var i = 0; i < digitString.length; i++){
      letters.push(lettersOBJ[digitString[i]])
}

var generator = function(text, options){
  if (text.length === each.length){
    anagram[text] = true;
  }
  for (var k = 0; k < options.length; k++){
    generator(text + options[k],
    options.slice(0,k) + options.slice(k+1))
    //console.log('options', options)
  }
}



for (var j = 0; j< letters.length; j++){
  var first = letters[0];
  var second = letters[1];
  var third = letters[2];
  var fourth = letters[3];
  console.log(fourth)
  var each = letters[j]
  console.log('each', each)
  generator('', each);
}



return Object.keys(anagram)

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

var test = telephoneWords('2745', phoneDigitsToLetters)
console.log(test)

// => ['APGJ',
//   *        'APGK',
//   *        'APGL',
//   *        ..., // many many more of these
//   *        'CSIL']

//i: string and an object
//o: array of all combinations
//c:
//e: 0 and 1 dont have letters associated with them, so they should be left as numbers.

//set anagram to an empty objeeft

