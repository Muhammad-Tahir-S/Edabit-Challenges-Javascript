//Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(nums) {
	var nums1 = nums.sort(function (a, b){return a-b})
	var max = 0
	for (i=5; i<nums1.length; i++){
		max += nums1[i];
	}
	return max
}