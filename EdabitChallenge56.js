//Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

const isAvgWhole = (arr) =>{
	let sum = 0;
	for (i in arr){sum += arr[i]}
	if (sum%(arr.length)===0){return true}
	return false
}
