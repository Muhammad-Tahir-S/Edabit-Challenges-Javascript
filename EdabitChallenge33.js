//Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
	var count = 0;
	var vowlStr = str.match(/(a|e|i|o|u)/g);
	for (var i = 0; i < vowlStr.length; i++) {
		count += 1;
	}
	return count
}