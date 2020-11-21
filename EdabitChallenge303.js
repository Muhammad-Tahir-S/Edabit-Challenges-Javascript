//Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

function derivative(b, m) {
	return b * m ** (b - 1)
}