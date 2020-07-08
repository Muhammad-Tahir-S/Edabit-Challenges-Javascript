//Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

let isSymmetrical = num => {
		let arr = String(num).split('').reverse();
		if (num === Number(arr.join(''))){return true}
		return false
	}