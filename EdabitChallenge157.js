//Create a function that takes a string and replaces the vowels with another character.

function replaceVowel(word){
	return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
}