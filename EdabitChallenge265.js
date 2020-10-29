//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

function shiftToLeft(x, y) {
		return y?shiftToLeft(x*2, --y):x
}