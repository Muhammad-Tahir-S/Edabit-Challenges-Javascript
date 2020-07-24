//Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

function totalVolume(...boxes) {
	var sum=0;
	for (i=0; i<boxes.length; i++) {
		sum+=boxes[i][0] * boxes[i][1] * boxes[i][2];
	}
	return sum;
}