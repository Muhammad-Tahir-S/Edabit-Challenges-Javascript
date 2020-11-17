//Create a function that takes a word and extends all vowels by a number num.

function extendVowels(word, num) {
	if (num < 0 || num % 1) return "invalid";
	return word.replace(/[aeiou]/gi, v => v.repeat(num + 1));
}