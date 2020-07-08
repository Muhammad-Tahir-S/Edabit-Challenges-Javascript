//Create a function to count the number of 1s in a 2D array.

function countOnes(matrix) {
	return matrix.toString().split(',').filter(x => x == '1').length
}
