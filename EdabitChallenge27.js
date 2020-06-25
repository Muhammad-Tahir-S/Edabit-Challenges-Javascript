//Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
	var array = str.split("");
	var array2 = array.map( x => x.repeat(2));
	var doubleString = array2.join("");
	return doubleString
	
}