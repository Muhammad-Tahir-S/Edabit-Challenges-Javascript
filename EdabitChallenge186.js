//Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

const calculateLosses = obj => 
	Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';