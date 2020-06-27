//Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.

function isOrthogonal(arr1, arr2) {
	var ortho = 0;
	for (i = 0; i < arr1.length; i++){
		ortho += arr1[i]*arr2[i]
	}
	if (ortho === 0) {
		return true
	}	
	return false
}