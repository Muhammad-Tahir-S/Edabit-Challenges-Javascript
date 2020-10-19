//Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

function fizzBuzz(number){
	let arr = [];
	for (let i = 1; i <= number; i++) {
		arr.push(i % 15 == 0 ? "FizzBuzz": i % 5 == 0 ? "Buzz": i % 3 == 0 ? "Fizz" : i);
	}
	return arr
}