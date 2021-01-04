//Write a function that does the following for the given values: add, subtract, divide and multiply . This is simply referred to as the basic arithmetic operations. The variables have to be defined, but in this challenge, it will be defined for you. All you have to do, is to check the variables, do some string to integer conversion, use some if conditions, and apply the arithmetic operation.
//The numbers and operation are given as a string and should result to an integer value.

function operation(a, b, op) {
	return op[0] == 'a'? +a + +b: 
				 op[0] == 's'? +a - +b:
				 op[0] == 'd'? b == 0? 'undefined': +a / +b:
				 op[0] == 'm'? +a * +b:
				 'undefined';
}