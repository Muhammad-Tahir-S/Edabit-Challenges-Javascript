//A repdigit is a positive number composed out of the same digit.

//Create a function that takes an integer and returns whether it's a repdigit or not.
function isRepdigit(num) {
	num += "";
	for (i = 0; i < num.length; i++) {
			if (num[i] != num[0]) {
					return false;
			}
	}
	return true;
}