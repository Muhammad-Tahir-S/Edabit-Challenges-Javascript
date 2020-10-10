//Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

function findZip(str) {
	let arr = str.match(/zip/g);
	if(arr.length < 2){
		return -1;
	}else{
		return str.lastIndexOf("zip");
	}
}