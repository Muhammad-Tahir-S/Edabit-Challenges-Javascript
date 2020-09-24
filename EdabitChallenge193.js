//Create a function that takes a number and returns an array with the digits of the number in reverse order.

const reverseArr = n => 
 [...String(n)].map(Number).reverse();