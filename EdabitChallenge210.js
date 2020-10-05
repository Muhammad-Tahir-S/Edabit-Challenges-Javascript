//Create a function that counts the integer's number of digits.

const count = n => n == 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1