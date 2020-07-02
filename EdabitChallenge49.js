// Create a function that sorts an array and removes all duplicate items from it.

function set(arr) {
	const setArr = ([...new Set(arr)])
	return setArr
	}