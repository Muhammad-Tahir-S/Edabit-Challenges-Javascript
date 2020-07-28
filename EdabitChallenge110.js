//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}