//Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
	const sum = Object.values(obj).reduce((acc, value) => acc + value);
  return sum - limit;
}