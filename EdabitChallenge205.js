//Create a function thats takes an array of integers and returns true if every number is prime. Otherwise, return false.

const allPrime = arr => arr.every(num => 
  num !== 1 && [...Array(num).keys()].slice(2).every(n => num % n));