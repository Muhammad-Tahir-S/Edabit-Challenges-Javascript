//Create a function that takes an integer and returns the factorial of that integer.

function factorial(int) {
	let fact = 1;
	for (i = 1; i <= int; i++) {
		fact *= i;
	}
	return fact
}