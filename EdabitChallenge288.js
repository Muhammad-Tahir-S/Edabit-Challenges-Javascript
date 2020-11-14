//Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

function stepsToConvert(string) {
	const upper = [...string].filter(char => char === char.toUpperCase())
	const lower = [...string].filter(char => char === char.toLowerCase())
	return Math.min(upper.length,lower.length)
}