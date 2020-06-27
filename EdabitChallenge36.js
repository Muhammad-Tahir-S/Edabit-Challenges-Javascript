// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str) {
	var newArr = str.match(/[^aeiouAEIOU]/g);
	var newString = newArr.join('');
	return newString
	
}