//Create a function that returns only strings with unique characters.

const filterUnique = arr =>
arr.filter(x => new Set(x).size == x.length);