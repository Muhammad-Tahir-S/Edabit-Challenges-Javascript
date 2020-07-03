//A value is omnipresent if it exists in every subarray inside the main array. Create a function that determines whether an input value is omnipresent for a given array.

const isOmnipresent = (arr, val) => {
	for (i in arr){
		for (i in arr[i]){
			return arr[i].includes(val)
		}
	}
}