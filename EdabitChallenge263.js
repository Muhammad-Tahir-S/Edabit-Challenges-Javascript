//Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

function lineLength([x1, y1], [x2, y2]) {
	return +Math.hypot(x1 - x2, y1 - y2).toFixed(2);
}