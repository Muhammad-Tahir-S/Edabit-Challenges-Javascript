//Create a function that returns true if the first array is a subset of the second. Return false otherwise.

function isSubset(arr1, arr2) {
  return arr1.every((val) => arr2.includes(val));
}