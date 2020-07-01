// Create a function that returns the number of hashes and pluses in a string.

const hashPlusCount = str => [
  (str.match(/#/g) || []).length,
  (str.match(/\+/g) || []).length,
];