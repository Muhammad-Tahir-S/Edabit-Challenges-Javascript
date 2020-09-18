//Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
 arr = arr.sort((a,b) => a - b).filter(x => x > 0);
 return arr[0] + arr[1];

}