//Takes an array of numbers, returns both the minimum and maximum numbers, in that order.

function minMax(arr) {
	arr.sort(function(a, b){return(a - b)})
	return [arr[0], arr[arr.length - 1]]
	
}