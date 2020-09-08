//Write a function that reverses all the words in a sentence that start with a particular letter.

function specialReverse(s, c) {
	return s.split(" ")
		.map(x => x[0]== c ? x.split("").reverse().join(""):x)
		.join(" ");
}