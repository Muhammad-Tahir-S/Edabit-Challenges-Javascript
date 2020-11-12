//Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

const checkSum = (arr, n) => arr.some(a=>arr.includes(n-a))