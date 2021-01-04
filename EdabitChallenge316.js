//Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:

function checkEquals(arr1, arr2) {
	return arr1.every((x, i) => x == arr2[i])
}