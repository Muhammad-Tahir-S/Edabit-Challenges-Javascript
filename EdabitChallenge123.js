//Create a function that returns true if two arrays contain identical values, and false otherwise.

function checkEquals(arr1, arr2) {
	return arr1.every((x, i) => x == arr2[i])
}