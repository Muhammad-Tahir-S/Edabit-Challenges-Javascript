//Create a function that takes three parameters and returns an array with the first parameter x, the second parameter y, and every number in between the first and second parameter in ascending order. Then filter through the array and return the array with numbers that are only divisible by the third parameter n.

let arrayOperation = (x, y, n) =>{
		let ansArr = [];
				for (i = x; i<=y; i++){
				if (i%n === 0){
					ansArr.push(i)
				}
			}
		return ansArr
}