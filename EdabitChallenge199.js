//Create a function that takes an array of integers and sum up the even and odd numbers seperately and then substract the smaller one from the bigger one. Return the substraction.

const warOfNumbers = arr => Math.abs(arr.reduce((a, b) => a + (b%2 ? b : -b), 0));