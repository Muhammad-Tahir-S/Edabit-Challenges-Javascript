//Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

//"{fraction} rounded to {n} decimal places is {answer}"

function fracRound(frac, n) {
	let f = frac.split('/');
	return `${frac} rounded to ${n} decimal places is ${(f[0] / f[1]).toFixed(n)}`; 
}