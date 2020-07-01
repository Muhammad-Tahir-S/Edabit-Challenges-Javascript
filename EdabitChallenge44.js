// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

//isPrefix should return true if it begins with the prefix argument.
//isSuffix should return true if it ends with the suffix argument.
//Otherwise return false.

//Create a function that takes in an array of names and returns the name of the secret society.

const isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1));

const isSuffix = (word, suffix) => word.endsWith(suffix.slice(1));