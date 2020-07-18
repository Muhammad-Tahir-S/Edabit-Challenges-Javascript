//Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

function getDecimalPlaces(num) {
	return num.includes(".") ? num.split(".")[1].length : 0;
}