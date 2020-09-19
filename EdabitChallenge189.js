//Create a function that takes an array of any length. Modify each element (capitalize, reverse, hyphenate).

function editWords(arr){
	return arr.map(word => {
		const w = word.toUpperCase().split("");
		w.splice(Math.floor(word.length) / 2, 0, "-");
		return w.reverse().join("")
	});
}