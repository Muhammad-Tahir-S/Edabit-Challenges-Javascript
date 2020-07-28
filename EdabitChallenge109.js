//An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
	return arr.every((n, i) => n % 2 === i % 2);
}