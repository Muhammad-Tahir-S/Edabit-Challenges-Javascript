//Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

function DECIMATOR(str) {
	return str.slice(0, -Math.ceil(str.length / 10))
}