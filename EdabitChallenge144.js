//A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//The wanted word is in lowercase.
//The crowd of letters is all in uppercase.
//Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function tuckIn(arr1, arr2) {
	let lastValue = arr1[arr1.length -1];
	arr1.pop()
	for (i = 0; i < arr2.length; i++){
		arr1.push(arr2[i])
	}
	arr1.push(lastValue)
	return arr1
}