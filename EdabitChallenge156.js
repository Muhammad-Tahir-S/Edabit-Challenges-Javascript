//Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

const reverseAndNot = n => +([...''+n].reverse().join('') + n);