//Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.

function equal(a, b, c) {
	const size = (new Set([a, b, c])).size;
	return size === 3 ? 0 : 4 - size;
}