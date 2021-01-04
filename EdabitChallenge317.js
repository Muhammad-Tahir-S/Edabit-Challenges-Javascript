//Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
	const [largest, second, ...rest] = arr.sort((x,y) => y - x)
	return second
}