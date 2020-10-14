//Create a function that takes a binaryl output reading and returns the analog voltage level that would create that DAC reading.

function adc(value) {
	return parseFloat((value * 5 / 1023).toFixed(2))
}