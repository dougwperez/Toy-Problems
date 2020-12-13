

//i: sorted array
//o: shuffled Array
//c:
//e:



// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)


var orderedDeck = function () {
  var suits = ['♥', '♣', '♠', '♦'];
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(value + suit);
    });
  });

  return deck;
};


// console.log('test', test)

var sorted = orderedDeck()

console.log('sorted', sorted)
var shuffleDeck = function (deck) {
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

console.log('Result', shuffleDeck(sorted))


//define var for deck.length j = 0, and a temp
//while subtracting 1 from array.length each time.
    //assign j to a random number function
    //temp is set to array[i]






