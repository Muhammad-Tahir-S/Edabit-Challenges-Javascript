//Create a function that returns the mean of all digits.

function mean(num) {
	let s=String(Math.abs(num)).split('');
	return s.reduce((x,y)=>x+Number(y),0)/s.length;
}