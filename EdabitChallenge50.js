// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).\

function sortNumsAscending(arr) {
	if (arr===[]|arr===null){
		return []
	}
	return arr.sort(function (a,b)
			{return (a-b)})
	}