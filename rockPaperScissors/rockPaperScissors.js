/*
Write a function that generates every sequence of throws a single
player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  var results = [];
  var choices = ['R', 'P', 'S'];

  choices.forEach(function (current1) {
    choices.forEach(function (current2) {
      choices.forEach(function (current3) {
        var combinations = current1 + current2 + current3
        results.push(combinations)
      })
    })

  })
  return results
}

rockPaperScissors()

//i: numberof rounds
//0: array of all the possibilities

//create a restult array
//create an array of choices

//create a for each loop that iterates over the choices array
//create a for each loop that iterates over the choices array
//create a for each loop that iterates over the choices array
//create a storage arr
//push current from each for each loop to storage arr
//concat storage array with results array

//return results arrray
