//Create a function that squares every digit of a number.

function squareDigits(n) {
	return +[...String(n)].map(x => Math.pow(+x, 2)).join("");
}