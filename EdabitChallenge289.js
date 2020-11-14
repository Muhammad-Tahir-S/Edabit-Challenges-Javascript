//Given a number, n, return a function which adds n to the number passed to it.

function add(n) {
	return function(x){return x + n};
}