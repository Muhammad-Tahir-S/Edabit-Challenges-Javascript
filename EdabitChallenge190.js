//Create a function that takes a word and returns true if the word has two consecutive identical letters.

function doubleLetters(word) {
	return /(\w)\1/.test(word)
}