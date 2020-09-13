//Create a function that returns the value of x (the "unknown" in the equation). Each equation will be formatted like this:

function solve(eq) {
	return -eval(eq.substring(1).replace("=", "-"))
}