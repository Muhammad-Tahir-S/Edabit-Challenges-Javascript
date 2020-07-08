//Write two functions:

//toArray(), which converts a number to an array of its digits.
//toNumber(), which converts an array of digits back to its number.

let toArray = num => {
		return String(num).split('').map(item => parseInt(item))
}
let toNumber = arr => {
		return Number(arr.join(''))
}

