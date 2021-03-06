var toFraction = function(number) {
  // var denominator = 1;
  var numLength = number.toString().length;
  var denominator = multiplierFinder(numLength, number)
  var numerator = number * denominator;
  // var multiplierLength = numLength - 2;
  // console.log("multiplierLength", multiplierLength)
  console.log("numerator", numerator)
  console.log("denominator", denominator)

  var denoOverNumer = denominator / numerator
  var denoOverNumerString = denoOverNumer.toString().length

  console.log("denoOverNumer", denoOverNumer)
  if (numerator < denominator && denoOverNumerString === 1){
    denominator = denominator / numerator
  numerator = numerator / numerator;
  var final = numerator.toString() + "/" + denominator.toString();
  }
  if ()
  return final

  };

  var multiplierFinder = function(numLength, number){

  var multiplierLength = numLength -2
  // console.log("multiplierFinder multiplierLength", multiplierLength)
  // console.log("multiplierFinder return", number * 10)
  var MultiplierString = "1";
  for (var i = 0; i < multiplierLength; i++){
      MultiplierString+= "0"
  }
  var MultiplierNum = parseInt(MultiplierString);
  // console.log("MultiplierNum", MultiplierNum)
  return MultiplierNum;
  }




  console.log(toFraction(0.5)) //. 1/2
  console.log(toFraction(0.25)) //. 1/4
  console.log(toFraction(0.20)) //. 1/5
  console.log(toFraction(0.30)) //. 3/10
  console.log(toFraction(0.335)) //. 67/200
  console.log(toFraction(0.75)) //. 3/4

  console.log(toFraction(3.0)) //. 3/1
  console.log(toFraction(2.5)) //. 5/2


  //i: number
  //o: string with a toFraction
  //c: n/a
  //e:

  //NOTE; Number / 1(denominator)
  //if number.length is 3, multiply number by 10, also multiple denominator by 10
  //if number.length is 4, multiply number by 100, also multiple denominator by 10
  //if number.length is 5, multiply number by 1000, also multiple denominator by 10
        //divide both numerator and denominator by highest common denominator