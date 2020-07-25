//Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.

function verbify(str) {
	let w1 = str.split(" ")[0];
	let w2 = str.split(" ")[1];
	return (/ed$/.test(w1)?w1 + " ":/e$/.test(w1)? w1 + "d ":w1 +"ed ") + w2;
}