//Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

const highLow= str => {
	let arr = str.split(' ').map(num => Number(num))
	return (`${Math.max(...arr)} ${Math.min(...arr)}`)
}