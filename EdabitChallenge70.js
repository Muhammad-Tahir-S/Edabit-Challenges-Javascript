//Given an array and an integer n, return the sum of the first n numbers in the array.


const sliceSum = (arr, n) => {
		if (n < arr.length){return arr.slice(0, n).reduce((acc, total) => acc + total, 0)}
		return arr.reduce((acc, total) => acc + total, 0)
	}uce((acc, total) => acc + total, 0)