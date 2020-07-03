//Create a function that takes a number as an argument and returns the highest digit in that number.

const highestDigit = (number) => {
	let arr = (number.toString().split(''))
	return Math.max(...arr)
}