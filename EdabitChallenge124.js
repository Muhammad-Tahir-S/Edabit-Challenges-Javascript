//Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
	return arr.map(x => String(x).includes(7)? x: x+7);
}