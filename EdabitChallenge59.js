// Create a function that takes an array of numbers and returns the mean value.

function mean(arr) {
	let arr1 = arr.reduce((acc, i) => {return acc + i})
	return parseFloat((arr1/arr.length).toFixed(2))
}