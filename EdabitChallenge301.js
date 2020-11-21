//Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

function joinDigits(n){
	return [...Array(n+1).keys()].slice(1).join``.split``.join`-`
}