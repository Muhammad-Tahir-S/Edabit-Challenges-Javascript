//Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
	let newArr = arr.sort(function (a,b){return b - a})
	return newArr[1]
}