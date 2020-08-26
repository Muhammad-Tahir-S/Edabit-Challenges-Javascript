//Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length)
}