//Create a function that counts the integer's number of digits.

function count(n) {
	return n/10|0?1+count(n/10):1
}