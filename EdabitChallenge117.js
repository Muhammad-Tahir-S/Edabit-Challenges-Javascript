//Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.

function intWithinBounds(n, lower, upper) {
	return lower <= n && n < upper && Number.isSafeInteger(n);
}