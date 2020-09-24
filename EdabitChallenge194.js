//Given two lines, determine whether or not they are parallel.
//Lines are represented by an array [a, b, c], which corresponds to the line ax+by=c.

function linesAreParallel(l1, l2) {
	return l1[0]*l2[1] == l1[1]*l2[0];
}