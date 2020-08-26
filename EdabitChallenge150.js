//Create a function that takes a decimal number and converts it to a binary number using Stack. The Stack is created for you.

function toBinary(num){
   let stack = new Stack(num);
	return Number(num.toString(2));
}