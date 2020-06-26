//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
	var absSum = 0;
	for (var i = 0; i < arr.length; i++) {
		absSum += Math.abs(arr[i]);
	}
	return absSum
	}