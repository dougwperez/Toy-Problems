/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */




var deepEquals = function (apple, orange) {
  var StringApple = JSON.stringify(apple);
  var StringOrange = JSON.stringify(orange);
  return (StringApple === StringOrange);
};

var exampleTrue = deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }); // true

var exampleFalse = deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } }); // false

console.log(exampleFalse)

//i: two objects
//o: boolean
//c: n/a
//e: n/a
