//Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

The first and last characters must be a consonant.
The character in the middle must be a vowel.
function isVowelSandwich(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	if (str.length === 3) {
		return !vowels.includes(str[0]) && vowels.includes(str[1]) && !vowels.includes(str[2]);
	}
	else {
		return false;
	}
}