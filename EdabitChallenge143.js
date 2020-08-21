//Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
	let lastValue = arr1[arr1.length -1];
	arr1.pop()
	for (i = 0; i < arr2.length; i++){
		arr1.push(arr2[i])
	}
	arr1.push(lastValue)
	return arr1
}