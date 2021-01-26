var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  } else {
    var split = romanNumeral.split('');

    var newNums = [];
    for (var i = 0; i < split.length; i++) {
      var currentNumeral = split[i]
      for (var key in DIGIT_VALUES) {
        if (currentNumeral === key) {
          newNums.push(DIGIT_VALUES[key])
        }
      }
    }
    console.log(newNums)

    var runningTotal = 0;
    for (var j = 0; j < newNums.length; j++) {
      if (newNums[j] >= newNums[j + 1]) {
        runningTotal += newNums[j] + newNums[j + 1];
      }
      if (newNums[j] < newNums[j + 1]) {
        runningTotal += newNums[j + 1] - newNums[j];
      }
    }
    return runningTotal;
  }
}
