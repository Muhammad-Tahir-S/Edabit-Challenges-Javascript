//Create a function that takes an array of strings and return an array, sorted from shortest to longest.

const sortByLength = (arr) => {
	return arr.sort(function (a,b){return a.length - b.length}) 
}