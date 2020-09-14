//Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
const counterpartCharCode = (char) => char == char.toUpperCase()
? char.toLowerCase().charCodeAt(0) : char.toUpperCase().charCodeAt(0)