//Given a string of numbers separated by a comma and space, return the total of all the numbers.

let addNums = nums => {
		return nums.split(", ").map(word => Number(word)).reduce((acc, sum) => acc + sum, 0)
	}