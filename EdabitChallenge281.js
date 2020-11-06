//Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.

function parityAnalysis(num) {
	return num % 2 == [...String(num)].reduce((sum,x) => sum + +x, 0) % 2;
}