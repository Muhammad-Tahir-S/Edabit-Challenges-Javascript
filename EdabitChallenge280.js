//Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

const afterNYears = (list, n) => {
	for (let person in list) list[person] += Math.abs(n);
	return list;
}