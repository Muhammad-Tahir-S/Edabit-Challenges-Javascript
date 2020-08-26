//Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

function indexMultiplier(arr) {
	return arr.reduce((acc,cv,i)=> acc + cv*i,0)
}