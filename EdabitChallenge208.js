//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(n) {
	return [Math.floor(n/2), Math.ceil(n/2)]
}