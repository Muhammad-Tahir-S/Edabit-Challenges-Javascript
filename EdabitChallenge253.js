//Create a function that takes three values: hours, minutes, seconds. Return the value that's the longest duration.

function longestTime(h, m, s) {
	return h < m/60? m < s/60? s : m : h;
}