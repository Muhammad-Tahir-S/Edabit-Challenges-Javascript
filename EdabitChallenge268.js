//Create a function that takes a string and censors words over four characters with *.
const censor = str => {
	return str
		.split(" ")
		.map(wrd => wrd.length > 4 ? "*".repeat(wrd.length) : wrd)
		.join(" ");
}