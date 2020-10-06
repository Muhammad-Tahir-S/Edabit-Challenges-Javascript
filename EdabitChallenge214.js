//Given an integer, return its iterated square root. Return "invalid" if it is negative.

function iSqrt(n) {
	if (n < 0) {
		return 'invalid'
	}
	let count = 0
	while (n >= 2) {
		n = Math.sqrt(n)
		count++
	}
	return count
}