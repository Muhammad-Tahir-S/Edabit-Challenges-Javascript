// function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
	var filteredArray = arr.filter(item => typeof item === "number");
	return filteredArray
}		