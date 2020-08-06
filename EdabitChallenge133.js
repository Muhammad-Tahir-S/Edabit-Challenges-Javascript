//Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

function boxSeq(step){
	return step + (step%2 * 2)
}