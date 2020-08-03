//Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

function factorGroup(num) {
	var r = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) r.push(i);
	}
	return r.length % 2 == 1 ? 'odd' : 'even';
}