//Given an array of numbers, write a function that returns an array that...
//Has all duplicate elements removed.
//Is sorted from least to greatest value.

function uniqueSort(arr) {
  return Array.from(new Set(arr)).sort((a,b) => a - b);
}