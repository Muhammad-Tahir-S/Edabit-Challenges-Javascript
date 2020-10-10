//Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.

function spotlightSum(n) {
	let left = n-1;
	let right = n+1;
	let result = left+ (left+10) + (left-10)+right+ (right+10) + (right-10) + n + (n+10) + (n-10)
	return result;
}