//Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

function isAutomorphic(n) {
	return Math.pow(n,2).toString().endsWith(n);
}