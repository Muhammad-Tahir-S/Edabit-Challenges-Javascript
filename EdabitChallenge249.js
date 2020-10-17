//Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.

function lastDig(a, b, c) {
	return ((a%10)*(b%10))%10 === c%10
}