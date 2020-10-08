//Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

function tempConversion(c) {
	const f = (c * 9 / 5 + 32).toFixed(2)
	const k = (c + 273.15).toFixed(2)
	return +k > 0 ? [+f, +k] : 'Invalid'
}