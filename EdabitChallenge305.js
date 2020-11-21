//Create a function that takes a string. If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.

const normalize = s =>
	/[a-z]/.test(s) ? s : s[0] + s.slice(1).toLowerCase() + '!';