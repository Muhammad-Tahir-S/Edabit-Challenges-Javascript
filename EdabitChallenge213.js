//Create a function that takes an integer n and returns the nth tetrahedral number.

function tetra(n) {
	return n>0?(1+n)*n/2+tetra(n-1):0
}