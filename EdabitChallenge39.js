// Create a function that calculates the amount of time saved (in minutes) were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

function timeSaved(lim, avg, d) {
	var timeSaved = ((d/avg) - (d/lim)) * 60;
	var time = Number.parseFloat(Math.abs(timeSaved)).toFixed(1);
	return parseFloat(time);
}