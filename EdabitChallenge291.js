//Write a function that returns an anonymous function, which adds n to its input

function addsNum(n) {
	return function(m){
		return n + m;
	}
}