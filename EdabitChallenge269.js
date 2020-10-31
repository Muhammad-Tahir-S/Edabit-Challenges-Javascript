//Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

function getDistance(a, b) {
	return +Math.hypot((b.x - a.x), (b.y - a.y)).toFixed(3);
}