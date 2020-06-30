// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
	var cubeSum = 0;
	for (i in nums){
	cubeSum += nums[i]*nums[i]*nums[i];	
	}
	return cubeSum
}