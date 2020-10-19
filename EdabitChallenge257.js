//Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

const sumFoundIndexes = (arr, n) => (
	arr.reduce((a, e, i) => a + ((e === n) && i), 0)
);