//Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

function remove_abc(str) {
	let replaced = str.replace(/[abc]/g, '')
	return str == replaced ? null : replaced
}