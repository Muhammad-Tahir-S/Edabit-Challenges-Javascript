//Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.

function weight(r, h) {
	return +((Math.PI * r**2 * h) / 1000).toFixed(2);
}