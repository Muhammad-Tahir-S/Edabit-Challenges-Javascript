//Create a function that takes an array of items and checks if the last item matches the rest of the array.

function matchLastItem(arr) {
	return arr.pop() === arr.join('');
}