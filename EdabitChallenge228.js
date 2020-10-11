//Given a simple math expression as a string, neatly format it as an equation.

function formatMath(expr) {
	return `${expr} = ${eval(expr.replace("x", "*"))}`
}