//Write a function that takes a positive integer and return its factorial.

function factorial(z) {
	var fact = 1;
	for (var i = 0; i<z ; i++){
		fact *= (z-i); 
	}
	return fact
	
}