//Write a function that inverts the keys and values of an object.

function invert(o) {
	return Object.fromEntries(
		Object.entries(o).map(arr => arr.reverse())
	);
}