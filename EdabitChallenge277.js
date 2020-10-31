//Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.

function wurstIsBetter(str) {
	return str.replace(/kielbasa|chorizo|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni/gi, 'Wurst');
}