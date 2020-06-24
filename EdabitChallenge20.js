//function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largestSwap(num) {
	let num1 = num + "";
	let num2 = num1.split("").reverse().join("");
	if (num1 >= num2) {
		return true
	}
	if (num1 < num2) {
		return false
	}
	
}