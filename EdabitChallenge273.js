//Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

function invert(o) {
	return Object.fromEntries(
		Object.entries(o).map(arr => arr.reverse())
	);
}