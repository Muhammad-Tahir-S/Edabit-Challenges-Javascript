//Create a function that squares every digit of a number.

const squareDigits = n => +((''+n).replace(/./g, v => v*v));