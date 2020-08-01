//Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

function getOnlyEvens(nums) {
	return nums.filter((num, i) => !(num % 2) && !(i % 2))
}