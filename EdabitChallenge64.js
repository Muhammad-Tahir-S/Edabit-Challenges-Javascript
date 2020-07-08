//Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

function indexShuffle(str) {
	const even = [...str].filter((char, i) => i % 2 === 0);
	const odd = [...str].filter((char, i) => i % 2);
	
	return [...even, ...odd].join('');
}