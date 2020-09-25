//Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr) {
	let sum = 0;
	for( let i = 0; i < arr.length; i++ ) {
		if(typeof(arr[i]) !== "number") {
			continue;
		}
		sum += arr[i];
	}
	return sum;
}