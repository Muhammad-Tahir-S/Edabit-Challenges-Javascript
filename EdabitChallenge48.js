// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
	var regex = /[aeiou]/gi;
	return str.search(regex)
}