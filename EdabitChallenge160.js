//Replace Vowel with Another Character

function replaceVowel(word){
	return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
}