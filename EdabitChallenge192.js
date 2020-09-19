//Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.

const solveForExp = (a, b) => {
  let count = 0
	while (a ** count !== b) count++
	return count
}