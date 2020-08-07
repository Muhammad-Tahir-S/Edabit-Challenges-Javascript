//Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function greetingMaker(salutation) {
	return function closure(name) {
	  return salutation + ", " + name 	
	}	
}