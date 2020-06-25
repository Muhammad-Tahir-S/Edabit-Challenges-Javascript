//Write a function that calculates the factorial of a number recursively.

function factorial(z) {
	var fact = 1;
	for (var i = 0; i<z ; i++){
		fact *= (z-i); 
	}
	return fact
	
}