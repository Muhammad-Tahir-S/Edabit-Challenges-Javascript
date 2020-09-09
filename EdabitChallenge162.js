//Create a function that takes a number num and returns its double factorial.

function doubleFactorial(num) {
	return num <= 0 ? 1 : num * doubleFactorial(num - 2)
}