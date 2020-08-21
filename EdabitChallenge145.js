//Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

function evenlyDivisible(a, b, c) {
	let sum = 0;
	for (i = a; i <= b; i++){
		if (i % c === 0) {
			sum += i;
		}
		else {sum += 0}
	}
	return sum
}