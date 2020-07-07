// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

let sortDescending = num => {
	let arr = String(num).split('');
	for (i in arr){
		arr[i] = Number(arr[i])
	}
	let arr1 = (arr.sort((a, b) => a - b));
	return Number((arr1.reverse()).join(''))
}
	
