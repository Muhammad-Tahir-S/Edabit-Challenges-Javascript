//Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function countPosSumNeg(nums) {
  if (nums === null || nums.length < 1) return [];
  let pos = nums.filter(x => x >= 0).length;
  let neg = nums.filter(x => x < 0).reduce((a, b) => a + b);
  return [pos, neg];
}