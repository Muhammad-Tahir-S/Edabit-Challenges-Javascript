//In this challenge, you have to establish if a given integer n is a Sastry number. If the number resulting from the concatenation of an integer n with its successor is a perfect square, then n is a Sastry Number.

//Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.

const isSastry = num => Number.isInteger(Math.sqrt(`${num}${num + 1}`));