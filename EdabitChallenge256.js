//Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

function uniqueArr(arr) {
	return [...new Set(arr.filter(el => el > 0))]
}