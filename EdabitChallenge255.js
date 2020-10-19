//Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.

function sameAscii(a, b) {
	const ascii = (word)=>{
		return [...word].reduce((acc, cur)=>acc+=cur.charCodeAt(),0)
	}
	return ascii(a)===ascii(b)
}