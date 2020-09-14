//Consider the following operation on an arbitrary positive integer:
//if n is even -> n / 2
//if n is odd -> n * 3 + 1

function collatz(num) {
	let x = num, steps = 0
	while(x!=1)
		{
			x = x % 2 == 0 ? x/2 : x * 3 +1
			steps++;
		}
	return steps
}