//Create a function which takes in a matrix as input, and return John's score after his game has ended.

const diceGame = arr => arr.some(v => v[0]===v[1]) ? 0 :
	arr.flat().reduce((a,v) => a + v, 0);