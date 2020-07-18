//Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

function asciiCapitalize(str) {
	return str.toLowerCase()
		.split('')
		.map(a => (a.charCodeAt(0) % 2 === 0) ? a.toUpperCase() : a)
		.join('')
}