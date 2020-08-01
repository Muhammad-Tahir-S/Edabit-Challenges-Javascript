//Create a function that receives a non-negative integer and returns the factorial of that number.

function fact(n) {
	return n < 2 ? 1 : n * fact(n - 1)
}