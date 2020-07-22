//Create a function that finds the word "bomb" in the given string. If there is a bomb, return "Duck!!!" otherwise return "There is no bomb, relax."

function bomb(str) {
	return /bomb/ig.test(str)?"Duck!!!":"There is no bomb, relax."
}