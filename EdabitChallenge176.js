//Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

function capMe(arr) {
	return arr.map(x => x = x[0].toString().toUpperCase() + x.substring(1).toLowerCase());
}