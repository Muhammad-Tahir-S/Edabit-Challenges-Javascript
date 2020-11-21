//A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

function isScalable(arr){
	for(i=1; i<arr.length; i++) {
		if(!((arr[i] - arr[i-1]) <= 5)) return false;
	}
	return true;
}