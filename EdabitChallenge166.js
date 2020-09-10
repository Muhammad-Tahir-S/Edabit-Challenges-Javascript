//Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

function makeTitle(str) {
	return str
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}