//Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

String.prototype.vreplace = function(vowel) {
	return this.replace(/[aeiou]/gi, vowel);
}