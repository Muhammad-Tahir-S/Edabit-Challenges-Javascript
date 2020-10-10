//Return the total number of arrays inside a given array.

function numOfSubbarrays(arr) {
	return arr.filter(a => a instanceof Array).length;
}