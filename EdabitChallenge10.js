Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step.

function matchHouses(step) {
	if (step > 0) {
	 matchSticks = ((step*6) - (step -1));
	return(matchSticks)
	}
	else {
		matchSticks = 0;
		return (matchSticks)
	}
}