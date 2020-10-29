//Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

const ascDesNone = (arr, str) =>
	str == 'Asc' ? arr.sort((a, b) => a - b) :
	str == 'Des' ? arr.sort((a, b) => b - a) :
	arr