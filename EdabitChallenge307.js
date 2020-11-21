//Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

function incrementToTop(arr) {
	let biggestElem = Math.max(...arr);
	return arr.reduce((a,b) => { return a + (biggestElem - b) },0 );
}