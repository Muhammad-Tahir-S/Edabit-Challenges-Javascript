//Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

function trace(arr) {
	var res = 0;
	for (var i=0; i<arr.length; i++) {
		res += arr[i][i]
	}
	
	return res;
}