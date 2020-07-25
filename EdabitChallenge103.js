//Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

function isTriplet(n1, n2, n3) {
		[a, b, h] = [n1, n2, n3].sort((a, b) => a - b);
		return a**2 + b**2 === h**2;
}