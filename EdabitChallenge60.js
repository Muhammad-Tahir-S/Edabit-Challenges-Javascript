// Write a function that takes a string as an argument and returns the left most digit in the string.

const leftDigit = (num) => {
	let regex = /[0-9]/g;
	return Number(num.match(regex)[0])
}	
