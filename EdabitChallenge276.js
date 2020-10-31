//Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

const findNaN = arr => arr.findIndex(isNaN);