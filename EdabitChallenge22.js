// function that takes two parameters and repeats the string n number of times.

function repetition(txt, n) {
	var reptxt = ""
	while (n > 0) {
		reptxt += txt
		n--;
	}
	return reptxt
	}
		