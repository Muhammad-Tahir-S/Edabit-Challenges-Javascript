//Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

function timeToFinish(full, part) {
	return full.replace(part, '').replace(/\s/g, '').length * .5
}