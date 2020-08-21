//Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

const makePlusFunction = baseNum => num => baseNum + num;