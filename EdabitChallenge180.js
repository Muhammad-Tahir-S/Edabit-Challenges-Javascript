//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNum(arr) {
  var sum = arr.reduce((a, b) => a + b, 0);
  return 55 - sum;
}