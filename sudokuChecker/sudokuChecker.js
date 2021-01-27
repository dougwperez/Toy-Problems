// /*
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// Input: A String representing the board.
// Output: 'solved' if the board is valid, 'invalid' if it isn't

const input = "735814296896275314214963857589427163362189745471356982923541678648792531157638429";
const input2 = "123456789123456789123456789123456789123456789123456789123456789123456789123456799";
var chunks = input.match(/[\s\S]{1,9}/g) || [];






function sudokuChecker(board) {
  var chunks = board.match(/[\s\S]{1,9}/g) || [];
  console.log(chunks)
  for (var i = 0; i < chunks.length; i++) {
    var dupesRemoved = new Set(chunks[i])
    console.log(dupesRemoved.size)
    if (dupesRemoved.size !== 9) {
      return false;
    }
  }
  return true
}


console.log(sudokuChecker(input))
console.log(sudokuChecker(input2))



//i: string of numbers
//o: boolean, solved or invalid
//c:
//e:
