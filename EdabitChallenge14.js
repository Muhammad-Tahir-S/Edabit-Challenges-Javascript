Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
	if (prob*prize > pay) {
		return (true)
	}
	else {
		return (false)
	}
}