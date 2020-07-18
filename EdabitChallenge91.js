//Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

function convertBinary(str) {
	return [...str].map(x=>x=/[a-m]/i.test(x)?0:1).join('')
}